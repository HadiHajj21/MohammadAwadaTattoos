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
        'nation',
        'gender',
        'height',
        'tattoo_type',
        'placement',
        'style',
        'description',
        'reference_images',
        'skin_images',
    ];

    protected $casts = [
        'reference_images' => 'array',
        'skin_images' => 'array',
    ];
}
