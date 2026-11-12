<?php

namespace App\Filament\Resources\PerangkatDaerahs\Pages;

use App\Filament\Resources\PerangkatDaerahs\PerangkatDaerahResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewPerangkatDaerah extends ViewRecord
{
    protected static string $resource = PerangkatDaerahResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
