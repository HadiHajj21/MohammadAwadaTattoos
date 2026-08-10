<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Appointment extends Model
{
    protected $fillable = [

        'booking_number',

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
        'contacted_at',
        'scheduled_at',
        'completed_at',
    ];

    protected $casts = [

        'reference_images' => 'array',

        'skin_images' => 'array',
    ];

    /*
    |--------------------------------------------------------------------------
    | Cloudflare R2 Helpers
    |--------------------------------------------------------------------------
    */

    public function getReferenceImageUrlsAttribute(): array
    {
        return collect($this->reference_images ?? [])
            ->map(fn ($path) => Storage::disk('r2')->url($path))
            ->all();
    }

    public function getSkinImageUrlsAttribute(): array
    {
        return collect($this->skin_images ?? [])
            ->map(fn ($path) => Storage::disk('r2')->url($path))
            ->all();
    }

    /*
    |--------------------------------------------------------------------------
    | Helpers
    |--------------------------------------------------------------------------
    */

    public function getClientNameAttribute(): string
    {
        return trim($this->first_name . ' ' . $this->last_name);
    }
}       