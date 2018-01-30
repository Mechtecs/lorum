<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function (Request $request) {
    return ["up" => true];
});

// CRUD: UserController
Route::group(['prefix' => 'user'], function () {
    Route::get('/', "UserController@index");
    Route::get('/profile', "UserController@profile");
    Route::get('/{user}', "UserController@get");
    Route::put('/{user}', "UserController@update");
    Route::delete('/{user}', ["middleware" => ["role:admin"], "uses" => "UserController@delete"]);
});

// CRUD: RoleController
Route::group(['prefix' => 'role', 'middleware' => ['role:admin']], function () {
    Route::get('/', 'RoleController@index');
    Route::post('/', 'RoleController@create');
    Route::put('/{role}', 'RoleController@update');
    Route::delete('/{role}', 'RoleController@delete');
});

// CRUD: ServerController
Route::group(['prefix' => 'server'], function () {
    Route::get('/', "ServerController@index");
    Route::get('/{server}', "ServerController@get");
    Route::get('/{server}/query', "ServerController@query");

    Route::group(['middleware' => ["role:admin"]], function() {
        Route::post('/', "ServerController@create");
        Route::put('/{server}', "ServerController@update");
        Route::delete('/{server}', "ServerController@delete");
    });
});

// CRUD: ServerGroupController
Route::group(['prefix' => 'servergroup'], function () {
    Route::get('/', "ServerGroupController@index");
    Route::get('/{serverGroup}', "ServerGroupController@get");

    Route::group(['middleware' => ["role:admin"]], function() {
        Route::post('/', "ServerGroupController@create");
        Route::put('/{serverGroup}', "ServerGroupController@update");
        Route::delete('/{serverGroup}', "ServerGroupController@delete");
    });
});

// Auth related stuff
Route::group(['prefix' => 'auth'], function () {
    Route::get('steam', 'AuthController@redirectToSteam')->name('auth.steam');
    Route::get('steam/handle', 'AuthController@handle')->name('auth.steam.handle');
    Route::get('logout', "AuthController@logout");
});
