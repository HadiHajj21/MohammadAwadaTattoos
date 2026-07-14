<?php

namespace App\Filament\Widgets;

use App\Models\Appointment;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class LatestAppointments extends TableWidget
{
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Appointment::query()->latest()
            )

            ->columns([

                Tables\Columns\TextColumn::make('booking_number')
                    ->label('Booking')
                    ->searchable()
                    ->weight('bold'),

                Tables\Columns\TextColumn::make('client_name')
                    ->label('Client'),

                Tables\Columns\TextColumn::make('status')
                    ->badge(),

                Tables\Columns\TextColumn::make('placement'),

                Tables\Columns\TextColumn::make('created_at')
                    ->since(),

            ]);
    }
}