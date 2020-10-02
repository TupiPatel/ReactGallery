<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Photos;
use App\Models\User;


class GalleryController extends Controller
{
    //

    public function index(){
        return view('app');
    }

    public function getPhotos(){


        // Array of fields you want to remove
        $fields_to_remove = ['email_verified_at', 'password', 'remember_token', 'created_at'];

        // Get the result of database
        $userId = 4;
     
        $user = User::find($userId);

        // Transform user object to array
         $user = $user->toArray();

        // Create a collection with the user inside
        $collection = collect($user);

        // Get all fields of our collection except these fields we don't want
        $result = $collection->except($fields_to_remove);

        // Return
       // print_r( json_encode($result));

        $photos = Photos::get()->toArray();
    
     /* return response()->json([
          "user" => $result,
          "photos" => $photos
      ]);*/
      return (json_encode([
        $result,
        "photos" => $photos
    ]));
    }
}
