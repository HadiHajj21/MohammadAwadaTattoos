<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();

            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('phone');

            $table->string('city')->nullable();
            $table->string('nation')->nullable();

            $table->string('gender')->nullable();
            $table->string('height')->nullable();

            $table->string('tattoo_type')->nullable();
            $table->string('placement')->nullable();
            $table->string('style')->nullable();

            $table->text('description')->nullable();

            // Stored as JSON arrays
            $table->json('reference_images')->nullable();
            $table->json('skin_images')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
