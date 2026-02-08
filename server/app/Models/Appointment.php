<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'email',
        'tattoo_description',
        'size',
        'placement',
        'reference_image',
        'preferred_date',
        'status',
    ];
}
