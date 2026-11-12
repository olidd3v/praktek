<?php

namespace App\Filament\Resources\PerangkatDaerahs\Pages;

use App\Filament\Resources\PerangkatDaerahs\PerangkatDaerahResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPerangkatDaerahs extends ListRecords
{
    protected static string $resource = PerangkatDaerahResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
