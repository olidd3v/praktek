<?php

namespace App\Filament\Resources\PegawaiNegeriSipils\Pages;

use App\Filament\Resources\PegawaiNegeriSipils\PegawaiNegeriSipilResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditPegawaiNegeriSipil extends EditRecord
{
    protected static string $resource = PegawaiNegeriSipilResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}
