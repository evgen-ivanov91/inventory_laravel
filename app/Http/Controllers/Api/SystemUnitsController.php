<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SystemUnit;
use Validator;
class SystemUnitsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $SystemUnit = SystemUnit::all();

        return response()->json($SystemUnit);
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
                'model' =>'required| string| min: 3| max: 50',
                'invNum' =>'required| string| min: 1| max:20',
                'serialNum' =>'unique:cartridges|string| max: 50',
                'CPU' =>'string| max: 50',
                'RAM' =>'string| max: 50',
                'SSD' =>'string| max: 50',
                'HDD' =>'string| max: 50',
                'VideoCard' =>'string| max: 50',
                'Licence' =>'string| max: 50',
                'Other1' =>'string| max: 300',
                'Other2' =>'string| max: 300',
                'Other3' =>'string| max: 300',
                'client_id' =>'max:30|exists:clients,id'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $SystemUnit = SystemUnit::create([
            "model" => $request->model,
            "invNum" => $request->invNum,
            "serialNum" => $request->serialNum,
            "CPU" => $request->CPU,
            "RAM" => $request->RAM,
            "SSD" => $request->SSD,
            "HDD" => $request->HDD,
            "VideoCard" => $request->VideoCard,
            "Licence" => $request->Licence,
            "Other1" => $request->Other1,
            "Other2" => $request->Other2,
            "Other3" => $request->Other3,
            "client_id" => $request->client_id
        ]);
        return [
            "status" => true,
            "SystemUnit" => $SystemUnit
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
                'model' =>'required| string| min: 3| max: 50',
                'invNum' =>'required| string| min: 1| max:20',
                'serialNum' =>'unique:cartridges|string| max: 50',
                'CPU' =>'string| max: 50',
                'RAM' =>'string| max: 50',
                'SSD' =>'string| max: 50',
                'HDD' =>'string| max: 50',
                'VideoCard' =>'string| max: 50',
                'Licence' =>'string| max: 50',
                'Other1' =>'string| max: 300',
                'Other2' =>'string| max: 300',
                'Other3' =>'string| max: 300',
                'client_id' =>'max:30|exists:clients,id'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $SystemUnit = SystemUnit::find($id);

        $SystemUnit->invNum = $request->invNum;
        $SystemUnit->CPU = $request->CPU;
        $SystemUnit->RAM = $request->RAM;
        $SystemUnit->SSD = $request->SSD;
        $SystemUnit->HDD = $request->HDD;
        $SystemUnit->VideoCard = $request->VideoCard;
        $SystemUnit->Licence = $request->Licence;
        $SystemUnit->Other1 = $request->Other1;
        $SystemUnit->Other2 = $request->Other2;
        $SystemUnit->Other3 = $request->Other3;
        $SystemUnit->client_id = $request->client_id;


        $SystemUnit->save();

        return $SystemUnit;
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
        $SystemUnit = SystemUnit::find($id);
        $SystemUnit->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
