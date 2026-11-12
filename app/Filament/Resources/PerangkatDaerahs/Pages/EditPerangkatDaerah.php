<?php

namespace App\Filament\Resources\PerangkatDaerahs\Pages;

use App\Filament\Resources\PerangkatDaerahs\PerangkatDaerahResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditPerangkatDaerah extends EditRecord
{
    protected static string $resource = PerangkatDaerahResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}
