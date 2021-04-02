<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SystemUnit extends Model
{
    use HasFactory;
    protected $fillable = ['model','invNum','serialNum','CPU','RAM','SSD','HDD','VideoCard', 'Licence', 'Other1','Other2','Other3','client_id'];
    public function Client(){
        return $this->belongsTo(Client::class);
    }
}

