<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Child extends Model
{
    protected $table = 'child';

    protected $fillable = [
        'firstname', 'lastname', 'othernames', 'address', 'guardian_name', 'guardian_email', 'guardian_phone', 'dob'
    ];

    public function sponsor() {
        return $this->belongsTo(User::class, 'sponsor_child');
    }
}
