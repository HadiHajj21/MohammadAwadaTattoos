<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {

            $table->id();

            // Client Information
            $table->string('first_name');
            $table->string('last_name');

            $table->string('email');
            $table->string('phone');

            $table->string('city')->nullable();
            $table->string('country')->nullable();

            $table->enum('gender', [
                'Male',
                'Female',
                'Other'
            ])->nullable();

            $table->unsignedSmallInteger('height_cm')->nullable();

            // Tattoo Information
            $table->string('tattoo_type')->nullable();

            $table->string('placement')->nullable();

            $table->string('tattoo_style')->nullable();

            $table->longText('description')->nullable();

            // Uploaded Images
            $table->json('reference_images')->nullable();

            $table->json('skin_images')->nullable();

            // Artist
            $table->enum('status', [
                'Pending',
                'Approved',
                'Rejected',
                'Completed',
                'Cancelled',
            ])->default('Pending');

            $table->longText('notes')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};