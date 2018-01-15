<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDetailsToRole extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('roles', function(Blueprint $table) {
          $table->string('format_style', 190)->after('display_name');
          $table->boolean('default_group')->after('description')->default(false);
          $table->integer('order')->after('name')->default(255);
        });

        $adminRole = new \App\Models\Role();
        $adminRole->name = "admin";
        $adminRole->order = 0;
        $adminRole->display_name = "Administrator";
        $adminRole->format_style = "color: red;";
        $adminRole->description = "This role can do anything.";
        $adminRole->saveOrFail();

        $userRole = new \App\Models\Role();
        $userRole->name = "player";
        $userRole->default_group = true;
        $userRole->display_name = "Player";
        $userRole->format_style = "color: blue;";
        $userRole->description = "Default user / guest role";
        $userRole->saveOrFail();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('roles', function(Blueprint $table) {
        $table->dropColumn('format_style');
        $table->dropColumn('default_group');
        $table->dropColumn('order');
      });
    }
}
