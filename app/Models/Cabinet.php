<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cabinet extends Model
{
    use HasFactory;
    protected $fillable = ['codePosition','description'];
}
//codePosition	description	created_at	updated_at
