<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:4096',
            'title' => 'nullable|string|max:255',
        ]);

        try {
            $path = $request->file('image')->store('gallery', 'r2');

            $gallery = Gallery::create([
                'title' => $request->input('title', 'New Work'),
                'image' => $path, //
            ]);

            return response()->json([
                'success' => true,
                'data'    => $gallery,
                'url'     => Storage::disk('r2')->url($path),
            ], 201);

        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'error'   => $e->getMessage(),
            ], 500);
        }
    }
}
