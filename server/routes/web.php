<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage; 
use App\Models\Gallery;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', fn () => view('app'));

Route::get('/gallery-images', function () {
    $images = Gallery::all()->map(function ($gallery) {
        return Storage::disk('r2')->url($gallery->image);
    });

    return response()->json($images);
});

Route::get('/gallery-images', function () {
    return \App\Models\Gallery::all(); // This returns a collection of objects
});