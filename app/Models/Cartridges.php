<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cartridges extends Model
{
    use HasFactory;
    protected $fillable = ['model','invNum','serialNum','compatibility','take','fueled','issued','client_id', 'status'];
    public function Client(){
        return $this->belongsTo(Client::class);
    }
}
//model	invNum	serialNum	compatibility	take	fueled	issued	client_id	created_at	updated_at
