<?php

namespace App\Filament\Resources\Appointments\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Placeholder;
use Illuminate\Support\HtmlString;

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
                                        'pending' => 'Pending',
                                        'approved' => 'Approved',
                                        'rejected' => 'Rejected',
                                        'completed' => 'Completed',
                                        'cancelled' => 'Cancelled',
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
                    Placeholder::make('reference_images_preview')
                        ->label('')
                        ->content(function ($record) {
                            if (!$record || empty($record->reference_image_urls)) {
                                return 'No reference images.';
                            }

                            $images = collect($record->reference_image_urls)
                                ->map(function ($url) {
                                    return '
                                        <a href="' . e($url) . '" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="' . e($url) . '"
                                                alt="Reference image"
                                                style="
                                                    width: 250px;
                                                    height: 250px;
                                                    object-fit: cover;
                                                    border-radius: 12px;
                                                    border: 1px solid rgba(255,255,255,0.1);
                                                "
                                            >
                                        </a>
                                    ';
                                })
                                ->implode('');

                            return new HtmlString(
                                '<div style="
                                    display: flex;
                                    flex-wrap: wrap;
                                    gap: 16px;
                                ">' . $images . '</div>'
                            );
                        })
                        ->columnSpanFull(),
                ]),

                Section::make('🩹 Skin Images')
                ->schema([
                    Placeholder::make('skin_images_preview')
                        ->label('')
                        ->content(function ($record) {
                            if (!$record || empty($record->skin_image_urls)) {
                                return 'No skin images.';
                            }

                            $images = collect($record->skin_image_urls)
                                ->map(function ($url) {
                                    return '
                                        <a href="' . e($url) . '" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="' . e($url) . '"
                                                alt="Skin image"
                                                style="
                                                    width: 250px;
                                                    height: 250px;
                                                    object-fit: cover;
                                                    border-radius: 12px;
                                                    border: 1px solid rgba(255,255,255,0.1);
                                                "
                                            >
                                        </a>
                                    ';
                                })
                                ->implode('');

                            return new HtmlString(
                                '<div style="
                                    display: flex;
                                    flex-wrap: wrap;
                                    gap: 16px;
                                ">' . $images . '</div>'
                            );
                        })
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