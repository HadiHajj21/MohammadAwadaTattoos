<?php

use Illuminate\Support\Facades\Route;
use App\Models\Gallery;
use App\Http\Controllers\Api\AppointmentController;

Route::get('/hero', function () {
    return Gallery::where('is_hero', true)->first();
});

Route::get('/gallery', function () {
    return Gallery::where('title', '!=', 'ImageH')
        ->orderBy('title', 'asc')
        ->get();
});

Route::post('/appointments', [AppointmentController::class, 'store']);
