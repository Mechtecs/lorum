<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Auth;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Role[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index(): Collection
    {
        return Role::all();
    }

    /**
     * Return the specified resource.
     */
    public function get(Role $role): Role
    {
        return $role;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\User $user
     * @return void
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function delete(User $user)
    {
        //
    }
}
