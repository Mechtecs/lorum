<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use xPaw\SourceQuery\SourceQuery;

class ServerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (!Auth::guest() && Auth::user()->hasRole("admin")) {
            return Server::all()->sortBy('order')->load("group");
        } else {
            return Server::whereActive(true)->get()->sortBy('order')->load("group");
        }
    }

    /**
     * Create the new resource
     *
     * @param Request $request
     * @return void
     */
    public function create(Request $request)
    {
        $server = new Server();
        $server->fill($request->toArray());
        $server->saveOrFail();
        return $server;
    }

    /**
     * Update the resource
     *
     * @param  \Illuminate\Http\Request $request
     */
    public function update(Request $request, Server $server)
    {
        $server->fill($request->toArray());
        $server->saveOrFail();
        return $server;
    }

    /**
     * Return the resource
     * @param Server $server
     */
    public function get(Server $server)
    {
        return $server->load("group");
    }

    /**
     * Delete the resource
     * @param Server $server
     */
    public function delete(Server $server)
    {
        $id = $server->id;
        if ($server->delete()) {
            return ["success" => true, "id" => $id];
        } else {
            return ["success" => false, "id" => $id];
        }
    }

  /**
   * Query and return server data
   * @param Server $server
   */
    public function query(Server $server) {
      $query = new SourceQuery();
      try {
        $query->Connect($server->ip, $server->port, 1, SourceQuery::SOURCE);
        $data = [
          "success" => true,
          "info" => $query->GetInfo(),
          "players" => $query->GetPlayers(),
        ];
      } catch (\Exception $exception) {
        return ["success" => false, "error" => $exception->getMessage()];
      } finally {
        $query->disconnect();
      }

      return $data;
    }
}
