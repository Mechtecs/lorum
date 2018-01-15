<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServerGroup extends Model
{
    protected $fillable = [
        'active',
        'order',
        'spoilers',
        'name'
    ];

    public function servers() {
        return $this->hasMany('App\Models\Server');
    }
}
