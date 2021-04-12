<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cartridges extends Model
{
    use HasFactory;
    protected $fillable = ['model','invNum','serialNum','compatibility','take','fueled','issued','client_id', 'status'];
    public function Client(){
        return $this->belongsTo(Client::class);
    }
    public function getCreatedAtAttribute($date){
        return Carbon::parse($date)->format('d.m.Y');
    }
}
//model	invNum	serialNum	compatibility	take	fueled	issued	client_id	created_at	updated_at
