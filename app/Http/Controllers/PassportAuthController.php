<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class PassportAuthController extends Controller
{
    //
    /**
     * Registration Req
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $file_extention = $request->profile->getClientOriginalExtension();
        $file_name = time().rand(99,999).'pic.'.$file_extention;
        $file_path = $request->profile->move(public_path().'\img',$file_name);
 
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password), 
            'profile' => 'img/'.$file_name,
            'bio' => $request->bio,
            'phone' => $request->phone,
        ]);
 
        $token = $user->createToken('LaravelAuthApp')->accessToken;
 
        return response()->json(['token' => $token], 200);
    }
 
    /**
     * Login Req
     */
    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
 
        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
            Log::info(response()->json(['token' => $token], 200));
            return response()->json(['token' => $token], 200);
        } else {
            
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }
}
