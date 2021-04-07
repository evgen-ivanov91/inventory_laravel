<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ClientsController;
use App\Http\Controllers\Api\SystemUnitsController;
use App\Http\Controllers\Api\MonitorController;
use App\Http\Controllers\Api\HeadphonesController;
use App\Http\Controllers\Api\KeyboardController;
use App\Http\Controllers\Api\MfpController;
use App\Http\Controllers\Api\CompMousesController;
use App\Http\Controllers\Api\OtherController;
use App\Http\Controllers\Api\PhotoscanController;
use App\Http\Controllers\Api\PrintersController;
use App\Http\Controllers\Api\ScanController;
use App\Http\Controllers\Api\SpeakersController;
use App\Http\Controllers\Api\CartridgesController;
use App\Http\Controllers\Api\CabinetsController;
use App\Http\Controllers\Api\PositionsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\UpsController;
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

Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::resource('Clients', ClientsController:: class);
    Route::resource('SystemUnits', SystemUnitsController:: class);
    Route::resource('Monitor', MonitorController:: class);
    Route::resource('Headphones', HeadphonesController:: class);
    Route::resource('Keyboard', KeyboardController:: class);
    Route::resource('Mfp', MfpController:: class);
    Route::resource('CompMouses', CompMousesController:: class);
    Route::resource('Other', OtherController:: class);
    Route::resource('Photoscan', PhotoscanController:: class);
    Route::resource('Printers', PrintersController:: class);
    Route::resource('Scan', ScanController:: class);
    Route::resource('Speakers', SpeakersController:: class);
    Route::resource('Cartridges', CartridgesController:: class);
    Route::resource('Cabinets', CabinetsController:: class);
    Route::resource('Positions', PositionsController:: class);
    Route::resource('Ups', UpsController:: class);
    Route::post('/logout',[AuthController::class, 'logout']);
});



