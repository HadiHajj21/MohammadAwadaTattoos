<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Gallery;

class GallerySeeder extends Seeder
{
    public function run(): void
    {
        $images = [

            [
                'title' => 'ImageH',
                'image' => 'gallery/01KG7K1ZCKW5HJSQVP14RP287V.jpeg',
                'is_hero' => true,
            ],

            [
                'title' => 'Image1',
                'image' => 'gallery/xxxxxxxx.jpeg',
                'is_hero' => false,
            ],

            [
                'title' => 'Image2',
                'image' => 'gallery/yyyyyyyy.jpeg',
                'is_hero' => false,
            ],

            [
                'title' => 'Image3',
                'image' => 'gallery/zzzzzzzz.jpeg',
                'is_hero' => false,
            ],

        ];

        foreach ($images as $image) {

            Gallery::updateOrCreate(
                ['title' => $image['title']],
                $image
            );

        }
    }
}