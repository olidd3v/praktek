<?php

namespace App\Filament\Resources\PerangkatDaerahs\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class PerangkatDaerahForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('nama_instansi')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true),

                TextInput::make('kode_instansi')
                    ->required()
                    ->alphaDash()
                    ->unique(ignoreRecord: true),

                TextInput::make('alamat')
                    ->nullable(),

                TextInput::make('telepon')
                    ->tel()
                    ->nullable(),
            ]);
    }
}
