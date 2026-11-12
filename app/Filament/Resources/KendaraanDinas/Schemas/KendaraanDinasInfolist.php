<?php

namespace App\Filament\Resources\KendaraanDinas\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class KendaraanDinasInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('perangkatDaerah.id')
                    ->label('Perangkat daerah'),
                TextEntry::make('pegawai.id')
                    ->label('Pegawai')
                    ->placeholder('-'),
                TextEntry::make('nomor_polisi'),
                TextEntry::make('merk_kendaraan'),
                TextEntry::make('tipe_model'),
                TextEntry::make('warna'),
                TextEntry::make('kondisi')
                    ->badge(),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
            ]);
    }
}
