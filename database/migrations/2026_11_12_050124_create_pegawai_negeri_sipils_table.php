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
        Schema::create('pegawai_negeri_sipil', function (Blueprint $table) {
            $table->id();
            $table->foreignId('perangkat_daerah_id')
                ->constrained('perangkat_daerah')
                ->cascadeOnDelete();

            $table->string('nama_pegawai');
            $table->string('nip', 18)->unique();
            $table->string('jabatan');
            $table->string('golongan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pegawai_negeri_sipils');
    }
};
