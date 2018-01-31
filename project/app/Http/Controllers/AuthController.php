<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Auth;
use Carbon\Carbon;
use Invisnik\LaravelSteamAuth\SteamAuth;

class AuthController extends Controller {
    /**
     * The SteamAuth instance.
     *
     * @var SteamAuth
     */
    protected $steam;

    /**
     * The redirect URL.
     *
     * @var string
     */
    protected $redirectURL = '/';

    /**
     * AuthController constructor.
     *
     * @param SteamAuth $steam
     */
    public function __construct(SteamAuth $steam)
    {
        $this->steam = $steam;
    }

    /**
     * Redirect the user to the authentication page
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function redirectToSteam()
    {
        return $this->steam->redirect();
    }

    /**
     * Get user info and log in
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function handle()
    {
        if ($this->steam->validate()) {
            $info = $this->steam->getUserInfo();

            if (!is_null($info)) {
                $user = $this->findOrNewUser($info);

                Auth::login($user, true);

                return redirect($this->redirectURL); // redirect to site
            }
        }
        return $this->redirectToSteam();
    }

    /**
     * Getting user by info or created if not exists
     *
     * @param $info
     * @return User
     */
    protected function findOrNewUser($info)
    {
        $user = User::where('steamid', $info->steamID64)->first();
        $newUser = false;

        $info = $info->toArray();

        $steamid = $info["steamID64"];
        $timecreated = (!empty($info["timecreated"])) ? Carbon::createFromTimeStampUTC($info["timecreated"]) : null;
        $lastlogoff = (!empty($info["lastlogoff"])) ? Carbon::createFromTimeStampUTC($info["lastlogoff"]) : null;
        unset($info["steamID"]);
        unset($info["steamID64"]);
        unset($info["lastlogoff"]);
        unset($info["timecreated"]);

        if (is_null($user)) {
          $user = new User();
          $user->steamid = $steamid;
          if ($timecreated)
            $user->timecreated = $timecreated;
          $newUser = true;
        }

        if ($lastlogoff)
          $user->lastlogoff = $lastlogoff;

        foreach ($info as $k => $v) {
          $user->{$k} = $v;
        }

        $user->saveOrFail();

        if ($newUser) {
            if (User::count() === 1) {
                $newRole = Role::whereName('admin')->first();
            } else {
                $newRole = Role::whereName('player')->first();
            }
            $user->attachRole($newRole);
        }

        return $user;
    }

    public function logout() {
      if (Auth::guest()) {
        abort(401);
      } else {
        Auth::logout();
        return redirect("/");
      }
    }
}
