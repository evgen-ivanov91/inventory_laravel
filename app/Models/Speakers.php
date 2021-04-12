<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Speakers extends Model
{
    use HasFactory;
    protected $fillable = ['model','invNum','serialNum','Other','client_id'];
    public function Client(){
        return $this->belongsTo(Client::class);
    }
    public function getCreatedAtAttribute($date){
        return Carbon::parse($date)->format('d.m.Y');
    }
}
