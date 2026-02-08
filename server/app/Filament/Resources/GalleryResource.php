<?php

namespace App\Filament\Resources;

use App\Models\Gallery;
use BackedEnum;

use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

use Filament\Forms\Components\FileUpload;

use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;

use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Tables\Table;
use Filament\Tables;

use App\Filament\Resources\GalleryResource\Pages;

class GalleryResource extends Resource
{
    protected static ?string $model = Gallery::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPhoto;

    protected static ?string $navigationLabel = 'Gallery';
    protected static ?string $pluralLabel = 'Gallery Images';

    /*
    |--------------------------------------------------------------------------
    | FORM (v4)
    |--------------------------------------------------------------------------
    */

    public static function form(Schema $form): Schema
    {
        return $form
            ->schema([
                Section::make('Image Assignment')
                    ->description('Select the slot where this image will appear on the website.')
                    ->schema([
                        Select::make('title')
                            ->label('Website Slot')
                            ->options([
                                'ImageH' => 'Hero Image (Top Banner)',
                                'Image1' => 'Gallery Position 1',
                                'Image2' => 'Gallery Position 2',
                                'Image3' => 'Gallery Position 3',
                                'Image4' => 'Gallery Position 4',
                            ])
                            ->required()
                            ->unique(ignoreRecord: true) // Prevents two images having the same slot
                            ->native(false),

                        FileUpload::make('image')
                            ->label('Upload Image')
                            ->disk('r2')
                            ->directory('gallery')
                            ->image()
                            ->required()
                            ->imageEditor(), // Allows the artist to crop if needed
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->disk('r2')
                    ->square(),
                
                Tables\Columns\TextColumn::make('title')
                    ->label('Slot Name')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'ImageH' => 'warning',
                        default => 'success',
                    }),

                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGalleries::route('/'),
            'create' => Pages\CreateGallery::route('/create'),
            'edit' => Pages\EditGallery::route('/{record}/edit'),
        ];
    }
}
