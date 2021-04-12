<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SystemUnit extends Model
{
    use HasFactory;
    protected $fillable = ['model','invNum','serialNum','CPU','RAM','SSD','HDD','VideoCard', 'Licence', 'Other1','Other2','Other3','client_id'];
    public function Client(){
        return $this->belongsTo(Client::class);
    }
    public function getCreatedAtAttribute($date){
        return Carbon::parse($date)->format('d.m.Y');
    }
}

