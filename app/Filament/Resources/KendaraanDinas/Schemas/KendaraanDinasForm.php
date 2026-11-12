<?php

namespace App\Filament\Resources\KendaraanDinas\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class KendaraanDinasForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('perangkat_daerah_id')
                    ->relationship('perangkatDaerah', 'nama_instansi')
                    ->required(),

                Select::make('pegawai_id')
                    ->relationship('pegawai', 'nama_pegawai')
                    ->searchable()
                    ->preload()
                    ->nullable(),

                TextInput::make('nomor_polisi')
                    ->required()
                    ->maxLength(15)
                    ->unique(ignoreRecord: true),

                TextInput::make('merk_kendaraan')
                    ->required()
                    ->maxLength(255),

                TextInput::make('tipe_model')
                    ->required()
                    ->maxLength(255),

                TextInput::make('warna')
                    ->required()
                    ->maxLength(100),

                Select::make('kondisi')
                    ->options([
                        'baik' => 'Baik',
                        'rusak_ringan' => 'Rusak Ringan',
                        'rusak_berat' => 'Rusak Berat',
                    ])
                    ->required()
                    ->default('baik'),
            ]);
    }
}
