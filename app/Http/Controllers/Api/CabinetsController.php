<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cabinet;

use Validator;
class CabinetsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Cabinet = Cabinet::all();

        return response()->json($Cabinet);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [

                'numberCabinet' =>'required| min: 1| max: 5',
                'description' =>'required| min: 2| max: 150'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $Cabinet = Cabinet::create([
            "numberCabinet" => $request->numberCabinet,
            "description" => $request->description
        ]);
        return [
            "status" => true,
            "Cabinet" => $Cabinet
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $validator = Validator::make(
            $request->all(),
            [

                'numberCabinet' =>'required| string| min: 1| max: 5',
                'description' =>'required| min:1 | max: 150',
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $Cabinet = Cabinet::find($id);

        $Cabinet->numberCabinet = $request->numberCabinet;
        $Cabinet->description = $request->description;


        $Cabinet->save();

        return $Cabinet;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $Cabinet = Cabinet::find($id);
        $Cabinet->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
