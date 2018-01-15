<?php

namespace App\Http\Controllers;

use App\Models\Server;
use Illuminate\Http\Request;

class ServerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Server::all()->sortBy('order')->load("group");
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
        if ($server->delete()) {
            return ["success" => true];
        } else {
            return ["success" => false];
        }
    }
}
