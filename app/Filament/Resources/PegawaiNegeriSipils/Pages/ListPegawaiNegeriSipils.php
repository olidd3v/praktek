<?php

namespace App\Filament\Resources\PegawaiNegeriSipils\Pages;

use App\Filament\Resources\PegawaiNegeriSipils\PegawaiNegeriSipilResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPegawaiNegeriSipils extends ListRecords
{
    protected static string $resource = PegawaiNegeriSipilResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
