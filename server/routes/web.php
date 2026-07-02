<?php

use Illuminate\Support\Facades\Route;
use App\Models\Gallery;
use App\Http\Controllers\Api\AppointmentController;

// Main View
Route::get('/', fn () => view('app'));
