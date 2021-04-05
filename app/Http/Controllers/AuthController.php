<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if($validator->fails()){
            return response()->json([
//                'status_code'=>400,
//                'message'=>'Bad request'
                "status" => false,
                $validator->messages()
            ]);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'status_code'=>200,
            'message'=> 'User created',

        ]);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if($validator->fails()){
            return response()->json([
                "status" => false,
                $validator->messages()]);
        }

        $credentials = request(['email','password']);

        if (!Auth::attempt($credentials)){
            return response()->json([
                'status_code'=>500,
                'message'=> 'Unautorized'
            ]);
        }

        $user = User::where('email',$request->email)->first();

        $tokenResult = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'status_code'=>200,
            'token'=> $tokenResult
        ]);
    }

    public function logout (Request $request){
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status_code'=>200,
            'message'=> 'Token deleted'
        ]);
    }
}
