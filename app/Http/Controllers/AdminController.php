<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Child;
use App\Models\User;

class AdminController extends Controller
{
    public function index() {
        $this->middleware('auth:api');
    }

    public function getChildList() 
    {
        $records = Child::all();

        return response()->json([
            'data' => $records
        ]);
    }

    public function addChild(Request $request)
    {
        $childData = $request->only('firstname', 'lastname', 'othernames', 'address', 'guardian_name', 'guardian_phone', 'guardian_email', 'dob');

        $child = Child::create($childData);

        return response()->json([
            'data' => [
                'message' => "New child added successfully"
            ]
        ]);
    }

    public function usersList() {
        $users = User::with('meta')->get();
        
        return response()->json(['data' => $users]);
    }

    public function assignSponsor(Request $request) {
        $child = Child::find($request->child_id);

        $child->sponsor()->attach($request->sponsor_id);
    }
}
