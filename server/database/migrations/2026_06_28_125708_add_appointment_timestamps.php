<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('appointments', function (Blueprint $table) {

            $table->timestamp('contacted_at')->nullable();

            $table->timestamp('scheduled_at')->nullable();

            $table->timestamp('completed_at')->nullable();

        });
    }

    public function down(): void
    {
        Schema::table('appointments', function (Blueprint $table) {

            $table->dropColumn([
                'contacted_at',
                'scheduled_at',
                'completed_at',
            ]);

        });
    }
};