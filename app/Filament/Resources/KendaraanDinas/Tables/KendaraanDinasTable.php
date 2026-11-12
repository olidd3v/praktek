<?php

namespace App\Filament\Resources\KendaraanDinas\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class KendaraanDinasTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('perangkatDaerah.nama_instansi')
                    ->label('Perangkat Daerah')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('pegawai.nama_pegawai')
                    ->label('Pegawai Penanggung Jawab')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('nomor_polisi')
                    ->searchable(),
                TextColumn::make('merk_kendaraan')
                    ->searchable(),
                TextColumn::make('tipe_model')
                    ->searchable(),
                TextColumn::make('warna')
                    ->searchable(),
                TextColumn::make('kondisi')
                    ->badge(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
