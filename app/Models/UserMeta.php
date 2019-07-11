<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserMeta extends Model {

    protected $table = 'user_meta';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'value', 'user_id'
    ];
}