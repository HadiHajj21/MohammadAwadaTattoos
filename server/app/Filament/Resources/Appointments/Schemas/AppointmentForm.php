<?php

namespace App\Filament\Resources\Appointments\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class AppointmentForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                Section::make('📋 Booking')
                    ->schema([

                        Grid::make(2)
                            ->schema([

                                TextInput::make('booking_number')
                                    ->disabled()
                                    ->dehydrated(false),

                                Select::make('status')
                                    ->options([
                                        'Pending' => 'Pending',
                                        'Approved' => 'Approved',
                                        'Rejected' => 'Rejected',
                                        'Completed' => 'Completed',
                                        'Cancelled' => 'Cancelled',
                                    ])
                                    ->required(),

                            ]),

                    ]),

                Section::make('👤 Client Information')
                    ->schema([

                        Grid::make(2)
                            ->schema([

                                TextInput::make('first_name')
                                    ->disabled()
                                    ->dehydrated(false),

                                TextInput::make('last_name')
                                    ->disabled()
                                    ->dehydrated(false),

                                TextInput::make('email')
                                    ->email()
                                    ->disabled()
                                    ->dehydrated(false),

                                TextInput::make('phone')
                                    ->tel()
                                    ->disabled()
                                    ->dehydrated(false),

                                TextInput::make('country')
                                    ->disabled()
                                    ->dehydrated(false),

                                TextInput::make('city')
                                    ->disabled()
                                    ->dehydrated(false),

                                Select::make('gender')
                                    ->options([
                                        'Male' => 'Male',
                                        'Female' => 'Female',
                                        'Other' => 'Other',
                                    ])
                                    ->disabled()
                                    ->dehydrated(false),

                                TextInput::make('height_cm')
                                    ->label('Height (cm)')
                                    ->numeric()
                                    ->disabled()
                                    ->dehydrated(false),

                            ]),

                    ]),

                Section::make('🎨 Tattoo Information')
                    ->schema([

                        Grid::make(3)
                            ->schema([

                                TextInput::make('tattoo_type')
                                    ->disabled()
                                    ->dehydrated(false),

                                TextInput::make('placement')
                                    ->disabled()
                                    ->dehydrated(false),

                                TextInput::make('tattoo_style')
                                    ->label('Style')
                                    ->disabled()
                                    ->dehydrated(false),

                            ]),

                        Textarea::make('description')
                            ->rows(5)
                            ->disabled()
                            ->dehydrated(false)
                            ->columnSpanFull(),

                    ]),

                Section::make('🖼 Reference Images')
                    ->schema([

                        FileUpload::make('reference_images')
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

                    ]),

                Section::make('🩹 Skin Images')
                    ->schema([

                        FileUpload::make('skin_images')
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

                    ]),

                Section::make('📝 Artist Notes')
                    ->schema([

                        Textarea::make('notes')
                            ->rows(6)
                            ->columnSpanFull(),

                    ]),

                Section::make('📅 Timeline')
                    ->schema([

                        Grid::make(3)
                            ->schema([

                                DateTimePicker::make('contacted_at'),

                                DateTimePicker::make('scheduled_at'),

                                DateTimePicker::make('completed_at'),

                            ]),

                    ]),

            ]);
    }
}