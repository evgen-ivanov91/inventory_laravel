<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Speakers extends Model
{
    use HasFactory;
    protected $fillable = ['model','invNum','serialNum','Other','client_id'];
    public function Client(){
        return $this->belongsTo(Client::class);
    }
}
