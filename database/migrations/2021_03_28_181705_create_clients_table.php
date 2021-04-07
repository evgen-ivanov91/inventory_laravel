<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('pib', 100)->nullable();
            $table->string('locations', 100)->nullable();
            $table->string('departament', 100)->nullable();
            $table->string('position', 50)->nullable();
            $table->string('phone' , 20)->nullable();
            $table->date('dob')->nullable();
            $table->date('inventory_data')->nullable();
            $table->string('login' , 20)->nullable();
            $table->string('email' , 20)->nullable();
            $table->string('numline' , 20)->nullable();
            $table->integer('status');
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
        Schema::dropIfExists('clients');
    }
}
