<?php

namespace App\Filament\Resources\PegawaiNegeriSipils\Pages;

use App\Filament\Resources\PegawaiNegeriSipils\PegawaiNegeriSipilResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewPegawaiNegeriSipil extends ViewRecord
{
    protected static string $resource = PegawaiNegeriSipilResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
