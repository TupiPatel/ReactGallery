<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Photos;

class PhotoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Photos::create([
            'user_id' => 1,
            'title' => 'Nandhaka Pieris',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape1.jpeg',
            'featured' => true
        ]);

        Photos::create([
            'user_id' => 1,
            'title' => 'New West Calgary',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape2.jpeg',
            'featured' => false
        ]);

        Photos::create([
            'user_id' => 1,
            'title' => 'Australian Landscape',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape3.jpeg',
            'featured' => false
        ]);

        Photos::create([
            'user_id' => 1,
            'title' => 'Halvergate Marsh',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape4.jpeg',
            'featured' => true
        ]);

        Photos::create([
            'user_id' => 1,
            'title' => 'Rikkis Landscape',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape5.jpeg',
            'featured' => false
        ]);

        Photos::create([
            'user_id' => 1,
            'title' => 'Kiddi Kristjans Iceland',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape6.jpeg',
            'featured' => true
        ]);
    }
}
