<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return User::with("roles.perms")->paginate();
    }

    /**
     * Return currently logged in user, or false
     */
    public function profile()
    {
        if (Auth::guest()) {
            return ["loggedIn" => false];
        } else {
            $user = Auth::user()->load("roles.perms");
            return ["loggedIn" => true, "userProfile" => $user];
        }
    }

    /**
     * Return the specified resource.
     *
     * @param  \App\Models\User $user
     * @return User
     */
    public function get(User $user)
    {
        return $user->load("roles");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\User $user
     * @return User|\Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $newUser = $request->toArray();
        if (Auth::guest())
            return abort(401);
        if (Auth::user()->steamid !== $user->steamid && !Auth::user()->hasRole('admin'))
            return abort(401);

        if (Auth::user()->hasRole('admin') && isset($newUser['roles']) && !empty($newUser['roles'])) {
            $user->detachRole($user->roles()->first()->id);
            $user->attachRole($newUser['roles'][0]['id']);
        }

        $user->save();
        return $user->load('roles');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function delete(User $user)
    {
        return;
    }
}
