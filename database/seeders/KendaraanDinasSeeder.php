<?php
namespace Database\Seeders;

use App\Models\KendaraanDinas;
use App\Models\PegawaiNegeriSipil;
use App\Models\PerangkatDaerah;
use Illuminate\Database\Seeder;

class KendaraanDinasSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            [
                'kode' => 'DISDIK',
                'nip' => '198501012010011001',
                'nomor_polisi' => 'F 1234 A',
                'merk' => 'Toyota',
                'tipe' => 'Avanza Veloz',
                'warna' => 'Hitam',
                'kondisi' => 'baik',
            ],
            [
                'kode' => 'DINKES',
                'nip' => '198702152011012002',
                'nomor_polisi' => 'F 2345 B',
                'merk' => 'Mitsubishi',
                'tipe' => 'Pajero Sport',
                'warna' => 'Putih',
                'kondisi' => 'rusak_ringan',
            ],
            [
                'kode' => 'DPUPR',
                'nip' => '198903102012011003',
                'nomor_polisi' => 'F 3456 C',
                'merk' => 'Toyota',
                'tipe' => 'Hilux',
                'warna' => 'Silver',
                'kondisi' => 'rusak_berat',
            ],
        ];

        foreach ($data as $item) {
            $instansi = PerangkatDaerah::where(
                'kode_instansi',
                $item['kode']
            )->first();

            $pegawai = PegawaiNegeriSipil::where(
                'nip',
                $item['nip']
            )->first();

            if ($instansi) {
                KendaraanDinas::updateOrCreate(
                    ['nomor_polisi' => $item['nomor_polisi']],
                    [
                        'perangkat_daerah_id' => $instansi->id,
                        'pegawai_id' => $pegawai?->id,
                        'merk_kendaraan' => $item['merk'],
                        'tipe_model' => $item['tipe'],
                        'warna' => $item['warna'],
                        'kondisi' => $item['kondisi'],
                    ]
                );
            }
        }
    }
}