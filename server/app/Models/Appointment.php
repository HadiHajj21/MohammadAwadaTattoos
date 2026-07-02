<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [

        'first_name',
        'last_name',

        'email',
        'phone',

        'city',
        'country',

        'gender',

        'height_cm',

        'tattoo_type',

        'placement',

        'tattoo_style',

        'description',

        'reference_images',

        'skin_images',

        'status',

        'notes',
    ];

    protected $casts = [

        'reference_images' => 'array',

        'skin_images' => 'array',
    ];
}