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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'Auth\LoginController@doLogin');
Route::post('register', 'Auth\RegisterController@register');

//Admin routes
Route::middleware('api')->get('child-list', 'AdminController@getChildList');
Route::middleware('api')->get('assign-sponsor', 'AdminController@assignSponsor');
Route::middleware('api')->get('users', 'AdminController@usersList');
Route::post('add-child', 'AdminController@addChild');
