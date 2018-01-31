<?php

use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('key', 128)->unique();
            $table->longText('value')->nullable();
            $table->timestamps();
        });

        $values = [
            'page_title' => 'Lorum',
            'ban_plugin' => 'none'
        ];

        foreach ($values as $k => $v) {
            Setting::create([
                'key' => $k,
                'value' => $v
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
