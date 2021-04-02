<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('system_units', function (Blueprint $table) {
            $table->id();
            $table->string('model', 100)->nullable();
            $table->string('invNum', 20)->nullable();
            $table->string('serialNum', 40)->nullable();
            $table->string('CPU', 40)->nullable();
            $table->string('RAM', 40)->nullable();
            $table->string('SSD', 40)->nullable();
            $table->string('HDD', 40)->nullable();
            $table->string('VideoCard', 40)->nullable();
            $table->string('Licence', 40)->nullable();
            $table->string('Other1', 300)->nullable();
            $table->string('Other2', 300)->nullable();
            $table->string('Other3', 300)->nullable();
            $table->unsignedBigInteger('client_id')->nullable();
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('system_units');
    }
}
