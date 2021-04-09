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
use App\Http\Controllers\Api\BarcodeScanerController;
use App\Http\Controllers\Api\DepartamentsController;
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
    Route::resource('clients', ClientsController:: class);
    Route::resource('systemunits', SystemUnitsController:: class);
    Route::resource('monitor', MonitorController:: class);
    Route::resource('headphones', HeadphonesController:: class);
    Route::resource('keyboard', KeyboardController:: class);
    Route::resource('mfp', MfpController:: class);
    Route::resource('compmouses', CompMousesController:: class);
    Route::resource('other', OtherController:: class);
    Route::resource('photoscan', PhotoscanController:: class);
    Route::resource('printers', PrintersController:: class);
    Route::resource('scan', ScanController:: class);
    Route::resource('speakers', SpeakersController:: class);
    Route::resource('cartridges', CartridgesController:: class);
    Route::resource('cabinets', CabinetsController:: class);
    Route::resource('positions', PositionsController:: class);
    Route::resource('ups', UpsController:: class);
    Route::resource('barcode', BarcodeScanerController:: class);
    Route::resource('departament', DepartamentsController:: class);
    Route::post('/logout',[AuthController::class, 'logout']);
});



