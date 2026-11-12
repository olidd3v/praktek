<?php

namespace Database\Seeders;

use App\Models\PegawaiNegeriSipil;
use App\Models\PerangkatDaerah;
use Illuminate\Database\Seeder;

class PegawaiNegeriSipilSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            [
                'kode' => 'DISDIK',
                'nama' => 'Budi Santoso',
                'nip' => '198501012010011001',
                'jabatan' => 'Kepala Bidang Pendidikan',
                'golongan' => 'IV/a',
            ],
            [
                'kode' => 'DINKES',
                'nama' => 'Siti Rahmawati',
                'nip' => '198702152011012002',
                'jabatan' => 'Kepala Seksi Pelayanan',
                'golongan' => 'III/d',
            ],
            [
                'kode' => 'DPUPR',
                'nama' => 'Andi Saputra',
                'nip' => '198903102012011003',
                'jabatan' => 'Kepala Bidang Infrastruktur',
                'golongan' => 'III/c',
            ],
        ];

        foreach ($data as $item) {
            $instansi = PerangkatDaerah::where(
                'kode_instansi',
                $item['kode']
            )->first();

            if ($instansi) {
                PegawaiNegeriSipil::updateOrCreate(
                    ['nip' => $item['nip']],
                    [
                        'perangkat_daerah_id' => $instansi->id,
                        'nama_pegawai' => $item['nama'],
                        'jabatan' => $item['jabatan'],
                        'golongan' => $item['golongan'],
                    ]
                );
            }
        }
    }
}