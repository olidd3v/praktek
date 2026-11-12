<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class ImageService
{
    public function compress(UploadedFile $file, string $directory = 'galleries'): string
    {
        $manager = new ImageManager(new Driver());

        $image = $manager->read($file->getRealPath());

        return $this->process($image, $directory);
    }

    public function compressExisting(string $path, string $directory = 'galleries'): string
    {
        $disk = Storage::disk('public');

        $manager = new ImageManager(new Driver());

        $image = $manager->read($disk->path($path));

        $newPath = $this->process($image, $directory);

        if ($path !== $newPath) {
            $disk->delete($path);
        }

        return $newPath;
    }

    private function process($image, string $directory): string
    {
        $image->scaleDown(
            width: 1920,
            height: 1920
        );

        $quality = 80;

        do {
            $encoded = $image->toWebp($quality);
            $quality -= 5;
        } while (
            $encoded->size() > 500 * 1024 &&
            $quality >= 20
        );

        $filename = $directory . '/' . uniqid() . '.webp';

        Storage::disk('public')->put(
            $filename,
            $encoded->toString()
        );

        return $filename;
    }
}