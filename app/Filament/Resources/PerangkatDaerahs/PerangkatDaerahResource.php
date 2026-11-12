<?php

namespace App\Filament\Resources\PerangkatDaerahs;

use App\Filament\Resources\PerangkatDaerahs\Pages\CreatePerangkatDaerah;
use App\Filament\Resources\PerangkatDaerahs\Pages\EditPerangkatDaerah;
use App\Filament\Resources\PerangkatDaerahs\Pages\ListPerangkatDaerahs;
use App\Filament\Resources\PerangkatDaerahs\Pages\ViewPerangkatDaerah;
use App\Filament\Resources\PerangkatDaerahs\Schemas\PerangkatDaerahForm;
use App\Filament\Resources\PerangkatDaerahs\Schemas\PerangkatDaerahInfolist;
use App\Filament\Resources\PerangkatDaerahs\Tables\PerangkatDaerahsTable;
use App\Models\PerangkatDaerah;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PerangkatDaerahResource extends Resource
{
    protected static ?string $model = PerangkatDaerah::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $navigationLabel = 'Perangkat Daerah';

    protected static ?string $modelLabel = 'Perangkat Daerah';

    protected static ?string $pluralModelLabel = 'Perangkat Daerah';
    

    public static function canViewAny(): bool
    {
        return auth()->user()->can('perangkat_daerah.view');
    }

    public static function canCreate(): bool
    {
        return auth()->user()->can('perangkat_daerah.create');
    }

    public static function canEdit($record): bool
    {
        return auth()->user()->can('perangkat_daerah.edit');
    }

    public static function canDelete($record): bool
    {
        return auth()->user()->can('perangkat_daerah.delete');
    }

    public static function canDeleteAny(): bool
    {
        return auth()->user()->can('perangkat_daerah.delete');
    }

    public static function form(Schema $schema): Schema
    {
        return PerangkatDaerahForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return PerangkatDaerahInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PerangkatDaerahsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPerangkatDaerahs::route('/'),
            'create' => CreatePerangkatDaerah::route('/create'),
            'view' => ViewPerangkatDaerah::route('/{record}'),
            'edit' => EditPerangkatDaerah::route('/{record}/edit'),
        ];
    }
}
