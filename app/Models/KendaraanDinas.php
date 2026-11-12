<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KendaraanDinas extends Model
{
    protected $table = 'kendaraan_dinas';

    protected $fillable = [
        'perangkat_daerah_id',
        'pegawai_id',
        'nomor_polisi',
        'merk_kendaraan',
        'tipe_model',
        'warna',
        'kondisi',
    ];

    public function perangkatDaerah(): BelongsTo
    {
        return $this->belongsTo(PerangkatDaerah::class);
    }

    public function pegawai(): BelongsTo
    {
        return $this->belongsTo(
            PegawaiNegeriSipil::class,
            'pegawai_id'
        );
    }
}