<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = ['pib','locations','departament','position','phone','dob','inventory_data','login', 'email', 'numline', 'status'];
    public function allTech(){
        return $this->hasMany(SystemUnit::class, 'client_id', 'id');
    }
    public function allMonitors(){
        return $this->hasMany(Monitor::class, 'client_id', 'id');
    }
    public function allBarcodeScaner(){
        return $this->hasMany(BarcodeScaner::class, 'client_id', 'id');
    }
    public function allUps(){
        return $this->hasMany(Ups::class, 'client_id', 'id');
    }
    public function allHeadphones(){
        return $this->hasMany(Headphones::class, 'client_id', 'id');
    }
    public function allKeyboard(){
        return $this->hasMany(Keyboard::class, 'client_id', 'id');
    }
    public function allMfp(){
        return $this->hasMany(Mfp::class, 'client_id', 'id');
    }
    public function allMouse(){
        return $this->hasMany(CompMouses::class, 'client_id', 'id');
    }
    public function allOther(){
        return $this->hasMany(Other::class, 'client_id', 'id');
    }
    public function allPhotoscan(){
        return $this->hasMany(Photoscan::class, 'client_id', 'id');
    }
    public function allPrinter(){
        return $this->hasMany(Printer::class, 'client_id', 'id');
    }
    public function allScan(){
        return $this->hasMany(Scan::class, 'client_id', 'id');
    }
    public function allSpeakers(){
        return $this->hasMany(Speakers::class, 'client_id', 'id');
    }
    public function allCartridges(){
        return $this->hasMany(Cartridges::class, 'client_id', 'id');
    }
    public function getCreatedAtAttribute($date){
        return Carbon::parse($date)->format('d.m.Y');
    }
}
