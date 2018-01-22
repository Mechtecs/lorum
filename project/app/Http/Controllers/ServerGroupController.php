<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\ServerGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ServerGroupController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return ServerGroup[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Response
   */
  public function index() {
    if (!Auth::guest() && Auth::user()->hasRole("admin")) {
      return ServerGroup::all()->sortBy('order')->load("servers");
    } else {
      return ServerGroup::whereActive(true)->get()->sortBy('order')->load("servers");
    }
  }

  /**
   * Create the new resource
   *
   * @param Request $request
   * @return void
   */
  public function create(Request $request) {
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
  public function update(Request $request, ServerGroup $serverGroup) {
    $serverGroup->fill($request->toArray());
    $serverGroup->save();
    return $serverGroup;
  }

  /**
   * Return the resource
   * @param ServerGroup $server
   */
  public function get(ServerGroup $serverGroup) {
    $serverGroup->load("servers");
    return $serverGroup;
  }

  /**
   * Delete the resource
   * @param ServerGroup $server
   */
  public function delete(ServerGroup $serverGroup) {
    $id = $serverGroup->id;
    $serverGroup->servers()->delete();
    if ($serverGroup->delete()) {
      return ["success" => true, "id" => $id];
    } else {
      return ["success" => false, "id" => $id];
    }
  }
}
