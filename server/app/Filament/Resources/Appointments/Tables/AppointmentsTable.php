<?php

namespace App\Filament\Resources\Appointments\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class AppointmentsTable
{
    public static function configure(Table $table): Table
    {
        return $table

            ->defaultSort('created_at', 'desc')

            ->columns([

                TextColumn::make('booking_number')
                    ->label('Booking')
                    ->searchable()
                    ->sortable()
                    ->copyable()
                    ->weight('bold'),

                TextColumn::make('client_name')
                    ->label('Client')
                    ->searchable([
                        'first_name',
                        'last_name',
                        'email',
                        'phone',
                    ]),

                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {

                        'Pending' => 'warning',

                        'Approved' => 'success',

                        'Rejected' => 'danger',

                        'Completed' => 'gray',

                        'Cancelled' => 'danger',

                        default => 'gray',

                    }),

                TextColumn::make('placement')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('tattoo_style')
                    ->label('Style')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('created_at')
                    ->label('Submitted')
                    ->since()
                    ->sortable(),

            ])

            ->filters([

                Tables\Filters\SelectFilter::make('status')
                    ->options([

                        'Pending' => 'Pending',

                        'Approved' => 'Approved',

                        'Rejected' => 'Rejected',

                        'Completed' => 'Completed',

                        'Cancelled' => 'Cancelled',

                    ]),

            ])

            ->recordActions([

                EditAction::make(),

            ])

            ->toolbarActions([

                BulkActionGroup::make([

                    DeleteBulkAction::make(),

                ]),

            ]);
    }
}