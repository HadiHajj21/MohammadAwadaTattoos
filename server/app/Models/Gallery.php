<?php

// app/Models/Gallery.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $table = 'galleries'; // Ensure this matches your table name
    protected $fillable = ['image', 'title']; // Columns allowed to be saved
}
