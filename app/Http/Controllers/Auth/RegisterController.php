<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\UserMeta;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => ['required', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'phone' => $data['phone'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        //Save user meta
        $meta = UserMeta::create(['name' => 'address', 'value' => $data['address'], 'user_id' => $user->id]);
        $meta = UserMeta::create(['name' => 'postal_code', 'value' => $data['postal_code'], 'user_id' => $user->id]);

        return $user;
    }

    public function register(Request $request)
    {
        $v = $this->validator($request->all());
        
        if($v->fails()) {
            return response()->json([
                'data' => [
                    'message' => "Validation Failed",
                    'errors' => $v->errors()
                ]
                ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $user = $this->create($request->all());

        return response()->json([
            'data' => [
                'message' => "Registration Success",
                'user' => $user
            ]
        ]); 
    }
}
