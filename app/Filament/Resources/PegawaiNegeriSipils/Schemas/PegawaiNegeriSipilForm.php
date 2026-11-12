<?php

namespace App\Filament\Resources\PegawaiNegeriSipils\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class PegawaiNegeriSipilForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('perangkat_daerah_id')
                    ->relationship('perangkatDaerah', 'nama_instansi')
                    ->required(),

                TextInput::make('nama_pegawai')
                    ->required()
                    ->regex('/^[\p{L}][\p{L}\s]*$/u')
                    ->maxLength(255),

                TextInput::make('nip')
                    ->required()
                    ->length(18)
                    ->unique(ignoreRecord: true),

                TextInput::make('jabatan')
                    ->required()
                    ->maxLength(255),

                Select::make('golongan')
                    ->options([
                        'I/a' => 'I/a',
                        'I/b' => 'I/b',
                        'I/c' => 'I/c',
                        'I/d' => 'I/d',
                        'II/a' => 'II/a',
                        'II/b' => 'II/b',
                        'II/c' => 'II/c',
                        'II/d' => 'II/d',
                        'III/a' => 'III/a',
                        'III/b' => 'III/b',
                        'III/c' => 'III/c',
                        'III/d' => 'III/d',
                        'IV/a' => 'IV/a',
                        'IV/b' => 'IV/b',
                        'IV/c' => 'IV/c',
                        'IV/d' => 'IV/d',
                        'IV/e' => 'IV/e',
                    ])
                    ->required(),
            ]);
    }
}
