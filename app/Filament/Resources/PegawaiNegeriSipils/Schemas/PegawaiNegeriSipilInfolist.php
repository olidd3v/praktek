<?php

namespace App\Filament\Resources\PegawaiNegeriSipils\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class PegawaiNegeriSipilInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('perangkatDaerah.id')
                    ->label('Perangkat daerah'),
                TextEntry::make('nama_pegawai'),
                TextEntry::make('nip'),
                TextEntry::make('jabatan'),
                TextEntry::make('golongan'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
            ]);
    }
}
