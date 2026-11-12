<?php

namespace App\Filament\Resources\PegawaiNegeriSipils;

use App\Filament\Resources\PegawaiNegeriSipils\Pages\CreatePegawaiNegeriSipil;
use App\Filament\Resources\PegawaiNegeriSipils\Pages\EditPegawaiNegeriSipil;
use App\Filament\Resources\PegawaiNegeriSipils\Pages\ListPegawaiNegeriSipils;
use App\Filament\Resources\PegawaiNegeriSipils\Pages\ViewPegawaiNegeriSipil;
use App\Filament\Resources\PegawaiNegeriSipils\Schemas\PegawaiNegeriSipilForm;
use App\Filament\Resources\PegawaiNegeriSipils\Schemas\PegawaiNegeriSipilInfolist;
use App\Filament\Resources\PegawaiNegeriSipils\Tables\PegawaiNegeriSipilsTable;
use App\Models\PegawaiNegeriSipil;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PegawaiNegeriSipilResource extends Resource
{
    protected static ?string $model = PegawaiNegeriSipil::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'Pegawai Negeri Sipil';

    public static function canViewAny(): bool
    {
        return auth()->user()->can('pegawai_negeri_sipil.view');
    }

    public static function canCreate(): bool
    {
        return auth()->user()->can('pegawai_negeri_sipil.create');
    }

    public static function canEdit($record): bool
    {
        return auth()->user()->can('pegawai_negeri_sipil.edit');
    }

    public static function canDelete($record): bool
    {
        return auth()->user()->can('pegawai_negeri_sipil.delete');
    }

    public static function canDeleteAny(): bool
    {
        return auth()->user()->can('pegawai_negeri_sipil.delete');
    }

    public static function form(Schema $schema): Schema
    {
        return PegawaiNegeriSipilForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return PegawaiNegeriSipilInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PegawaiNegeriSipilsTable::configure($table);
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
            'index' => ListPegawaiNegeriSipils::route('/'),
            'create' => CreatePegawaiNegeriSipil::route('/create'),
            'view' => ViewPegawaiNegeriSipil::route('/{record}'),
            'edit' => EditPegawaiNegeriSipil::route('/{record}/edit'),
        ];
    }
}
