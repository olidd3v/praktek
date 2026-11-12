<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\LoadGalleryController;
use App\Http\Controllers\BookingPostController;
use App\Http\Controllers\HomeController;

Route::get('/{slug?}', [HomeController::class, 'index']);

Route::get('/loadGallery', [LoadGalleryController::class, 'index']);
Route::get('/activities', [ActivityController::class, 'index']);
Route::get('/activities/{activity}', [ActivityController::class, 'show']);

Route::post('/booking', [BookingPostController::class, 'store'])->name('booking.store');

Route::get('/tour/{id}', [HomeController::class, 'show']);
Route::get('/rental/{id}', [HomeController::class, 'show']);