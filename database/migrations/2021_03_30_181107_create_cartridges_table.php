<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartridgesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cartridges', function (Blueprint $table) {
            $table->id();
            $table->string('model', 100)->nullable();
            $table->string('invNum', 20)->nullable();
            $table->string('serialNum', 40)->nullable();
            $table->string('compatibility', 100)->nullable();
            $table->date('take')->nullable();
            $table->date('fueled')->nullable();
            $table->date('issued')->nullable();
            $table->integer('status');
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
        Schema::dropIfExists('cartridges');
    }
}
