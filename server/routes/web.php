<?php

use Illuminate\Support\Facades\Route;
use App\Models\Gallery;

// Main View
Route::get('/', fn () => view('app'));

/**
 * Gallery Images API
 * Returns all images where title starts with 'Image' BUT is not 'ImageH'
 */
Route::get('/gallery-images', function () {
    return Gallery::where('title', 'LIKE', 'Image%')
        ->where('title', '!=', 'ImageH')
        ->orderBy('created_at', 'desc')
        ->get();
});

/**
 * Hero Image API
 * Returns specifically the record named 'ImageH'
 */
Route::get('/hero-image', function () {
    $hero = Gallery::where('title', 'ImageH')->first();

    if (!$hero) {
        return response()->json(['error' => 'Hero image not found'], 404);
    }

    return response()->json([
        'image' => $hero->image, // Ensure this matches your DB column: 'image' or 'image_path'
    ]);
});