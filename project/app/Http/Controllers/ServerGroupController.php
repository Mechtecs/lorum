<?php

namespace App\Http\Controllers;

use App\Models\ServerGroup;
use Illuminate\Http\Request;

class ServerGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ServerGroup[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Response
     */
    public function index()
    {
        return ServerGroup::all()->sortBy('order')->load("servers");
    }

    /**
     * Create the new resource
     *
     * @param Request $request
     * @return void
     */
    public function create(Request $request)
    {
        $serverGroup = new ServerGroup();
        $serverGroup->fill($request->toArray());
        $serverGroup->saveOrFail();
        return $serverGroup;
    }

    /**
     * Update the resource
     *
     * @param  \Illuminate\Http\Request $request
     */
    public function update(Request $request, ServerGroup $serverGroup)
    {
        $serverGroup->fill($request->toArray());
        $serverGroup->saveOrFail();
        return $serverGroup;
    }

    /**
     * Return the resource
     * @param ServerGroup $server
     */
    public function get(ServerGroup $serverGroup)
    {
        $serverGroup->load("servers");
    }

    /**
     * Delete the resource
     * @param ServerGroup $server
     */
    public function delete(ServerGroup $serverGroup)
    {
        if ($serverGroup->delete()) {
            return ["success" => true];
        } else {
            return ["success" => false];
        }
    }
}
