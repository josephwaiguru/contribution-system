<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Child;

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
        $childData = $request->only('firstname', 'lastname', 'othernames', 'address', 'guardian_name', 'guardian_phone', 'guardian_email');

        $child = Child::create($childData);

        return response()->json([
            'data' => [
                'message' => "New child added successfully"
            ]
        ]);
    }
}
