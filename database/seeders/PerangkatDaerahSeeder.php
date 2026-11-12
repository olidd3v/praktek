<?php

namespace Database\Seeders;

use App\Models\PerangkatDaerah;
use Illuminate\Database\Seeder;

class PerangkatDaerahSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            ['Dinas Pendidikan', 'DISDIK'],
            ['Dinas Kesehatan', 'DINKES'],
            ['Dinas Pekerjaan Umum dan Penataan Ruang', 'DPUPR'],
            ['Dinas Perhubungan', 'DISHUB'],
            ['Dinas Lingkungan Hidup', 'DLH'],
            ['Badan Kepegawaian dan Pengembangan Sumber Daya Manusia', 'BKPSDM'],
            ['Badan Pengelolaan Keuangan dan Aset Daerah', 'BPKAD'],
            ['Sekretariat Daerah', 'SETDA'],
        ];

        foreach ($data as [$nama, $kode]) {
            PerangkatDaerah::updateOrCreate(
                ['kode_instansi' => $kode],
                ['nama_instansi' => $nama]
            );
        }
    }
}