<?php

namespace App\Filament\Resources\KendaraanDinas;

use App\Filament\Resources\KendaraanDinas\Pages\CreateKendaraanDinas;
use App\Filament\Resources\KendaraanDinas\Pages\EditKendaraanDinas;
use App\Filament\Resources\KendaraanDinas\Pages\ListKendaraanDinas;
use App\Filament\Resources\KendaraanDinas\Pages\ViewKendaraanDinas;
use App\Filament\Resources\KendaraanDinas\Schemas\KendaraanDinasForm;
use App\Filament\Resources\KendaraanDinas\Schemas\KendaraanDinasInfolist;
use App\Filament\Resources\KendaraanDinas\Tables\KendaraanDinasTable;
use App\Models\KendaraanDinas;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class KendaraanDinasResource extends Resource
{
    protected static ?string $model = KendaraanDinas::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'Kendaraan Dinas';

    public static function canViewAny(): bool
    {
        return auth()->user()->can('kendaraan_dinas.view');
    }

    public static function canCreate(): bool
    {
        return auth()->user()->can('kendaraan_dinas.create');
    }

    public static function canEdit($record): bool
    {
        return auth()->user()->can('kendaraan_dinas.edit');
    }

    public static function canDelete($record): bool
    {
        return auth()->user()->can('kendaraan_dinas.delete');
    }

    public static function canDeleteAny(): bool
    {
        return auth()->user()->can('kendaraan_dinas.delete');
    }

    public static function form(Schema $schema): Schema
    {
        return KendaraanDinasForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return KendaraanDinasInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return KendaraanDinasTable::configure($table);
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
            'index' => ListKendaraanDinas::route('/'),
            'create' => CreateKendaraanDinas::route('/create'),
            'view' => ViewKendaraanDinas::route('/{record}'),
            'edit' => EditKendaraanDinas::route('/{record}/edit'),
        ];
    }
}
