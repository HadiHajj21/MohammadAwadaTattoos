<?php

namespace App\Filament\Resources\Appointments\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Filament\Forms\Components\FileUpload;

class AppointmentForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('booking_number')
                    ->default(null)
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('first_name')
                    ->required()
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('last_name')
                    ->required()
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required()
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('phone')
                    ->tel()
                    ->required()
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('city')
                    ->default(null)
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('country')
                    ->default(null)
                    ->disabled()
                    ->dehydrated(false),
                Select::make('gender')
                    ->options(['Male' => 'Male', 'Female' => 'Female', 'Other' => 'Other'])
                    ->default(null)
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('height_cm')
                    ->numeric()
                    ->default(null)
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('tattoo_type')
                    ->default(null)
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('placement')
                    ->default(null)
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('tattoo_style')
                    ->default(null)
                    ->disabled()
                    ->dehydrated(false),
                Textarea::make('description')
                    ->default(null)
                    ->disabled()
                    ->dehydrated(false)
                    ->columnSpanFull(),
                FileUpload::make('reference_images')
                    ->label('Reference Images')
                    ->disk('r2')
                    ->multiple()
                    ->image()
                    ->disabled()
                    ->openable()
                    ->downloadable(false)
                    ->reorderable(false)
                    ->appendFiles(false)
                    ->dehydrated(false)
                    ->panelLayout('grid')
                    ->imagePreviewHeight('250')
                    ->columnSpanFull(),

                FileUpload::make('skin_images')
                    ->label('Skin Images')
                    ->disk('r2')
                    ->multiple()
                    ->image()
                    ->disabled()
                    ->openable()
                    ->downloadable(false)
                    ->reorderable(false)
                    ->appendFiles(false)
                    ->dehydrated(false)
                    ->panelLayout('grid')
                    ->imagePreviewHeight('250')
                    ->columnSpanFull(),
                Select::make('status')
                    ->options([
                        'Pending' => 'Pending',
                        'Approved' => 'Approved',
                        'Rejected' => 'Rejected',
                        'Completed' => 'Completed',
                        'Cancelled' => 'Cancelled',
                    ])
                    ->default('Pending')
                    ->required(),
                Textarea::make('notes')
                    ->default(null)
                    ->columnSpanFull(),
                DateTimePicker::make('contacted_at'),
                DateTimePicker::make('scheduled_at'),
                DateTimePicker::make('completed_at'),
            ]);
    }
}
