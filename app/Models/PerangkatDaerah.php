<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PerangkatDaerah extends Model
{
    protected $table = 'perangkat_daerah';

    protected $fillable = [
        'nama_instansi',
        'kode_instansi',
        'alamat',
        'telepon',
    ];

    public function pegawai(): HasMany
    {
        return $this->hasMany(PegawaiNegeriSipil::class);
    }

    public function kendaraan(): HasMany
    {
        return $this->hasMany(KendaraanDinas::class);
    }
}