<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('steamid', 17)->unique();
            $table->string('personaname');
            $table->string('profileurl')->unique();
            $table->string('avatar');
            $table->string('avatarfull');
            $table->string('avatarmedium');
            $table->tinyInteger('personastate')->nullable();
            $table->tinyInteger('communityvisibilitystate')->nullable();
            $table->tinyInteger('profilestate')->nullable();
            $table->dateTime('lastlogoff')->nullable();
            $table->tinyInteger('commentpermission')->nullable();
            $table->string('realname')->nullable();
            $table->string('primaryclanid', 32)->nullable();
            $table->dateTime('timecreated')->nullable();
            $table->integer('gameid')->nullable();
            $table->string('gameserverip', 15)->nullable();
            $table->string('gameextrainfo', 128)->nullable();
            $table->tinyInteger('personastateflags')->nullable();
            $table->string('loccountrycode', 2)->nullable();
            $table->string('locstatecode', 8)->nullable();
            $table->string('loccityid', 8)->nullable();
            $table->primary('steamid');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
