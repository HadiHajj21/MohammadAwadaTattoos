<?php

use Illuminate\Support\Facades\Route;
use App\Models\Gallery;

// Main View
Route::get('/', fn () => view('app'));


Route::get('/api/hero', function () {
    $hero = Gallery::where('title', 'ImageH')->first();
    return response()->json($hero);
});

// Endpoint for the Gallery Grid (Filters out ImageH automatically)
Route::get('/api/gallery', function () {
    return Gallery::where('title', '!=', 'ImageH')
        ->orderBy('title', 'asc')
        ->get();
});