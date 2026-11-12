<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kendaraan_dinas', function (Blueprint $table) {
            $table->id();

            $table->foreignId('perangkat_daerah_id')
                ->constrained('perangkat_daerah')
                ->cascadeOnDelete();

            $table->foreignId('pegawai_id')
                ->nullable()
                ->constrained('pegawai_negeri_sipil')
                ->nullOnDelete();

            $table->string('nomor_polisi', 15)->unique();
            $table->string('merk_kendaraan');
            $table->string('tipe_model');
            $table->string('warna');

            $table->enum('kondisi', [
                'baik',
                'rusak_ringan',
                'rusak_berat'
            ])->default('baik');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kendaraan_dinas');
    }
};
