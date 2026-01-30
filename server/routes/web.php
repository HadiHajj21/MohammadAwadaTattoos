<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage; 
use App\Models\Gallery;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', fn () => view('app'));

Route::get('/gallery-images', function () {
    $files = Storage::disk('public')->files('gallery'); // storage/app/public/gallery
    $urls = array_map(fn($file) => '/storage/' . $file, $files);
    return response()->json($urls);
});

Route::get('/gallery-images', function() {
    return Gallery::all()->map(fn($g) => '/storage/' . $g->image);
});