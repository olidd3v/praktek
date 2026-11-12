<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PegawaiNegeriSipil extends Model
{
    protected $table = 'pegawai_negeri_sipil';

    protected $fillable = [
        'perangkat_daerah_id',
        'nama_pegawai',
        'nip',
        'jabatan',
        'golongan',
    ];

    public function perangkatDaerah(): BelongsTo
    {
        return $this->belongsTo(PerangkatDaerah::class);
    }

    public function kendaraan(): HasMany
    {
        return $this->hasMany(KendaraanDinas::class, 'pegawai_id');
    }
}