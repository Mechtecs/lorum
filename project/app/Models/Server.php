<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    protected $fillable = [
        "order",
        "name",
        "server_group_id",
        "ip",
        "port",
        "active"
    ];

    public function group() {
        return $this->belongsTo("App\Models\ServerGroup");
    }
}
