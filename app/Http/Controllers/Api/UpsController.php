<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ups;
use Validator;

class UpsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Ups = Ups::all();

        return response()->json($Ups);
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
                'serialNum' =>'unique:ups| max: 50',
                'Other' =>' max: 300',
                'client_id' =>'max:30|exists:clients,id'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $Ups = Ups::create([
            "model" => $request->model,
            "invNum" => $request->invNum,
            "serialNum" => $request->serialNum,
            "Other" => $request->Other,
            "client_id" => $request->client_id


        ]);
        return [
            "status" => true,
            "Ups" => $Ups
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
        $Ups = Ups::find($id);
//        dd($Printer->Client);  отдает вместе с пользователем
        if(!$Ups){
            return Ups()->json([
                "status"=>false,
                "message"=>"equipment not found"
            ])->setStatusCode(404);
        }
        return $Ups;
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

                'invNum' =>'required| string| min: 1| max:20',

                'Other' =>' max: 300',
                'client_id' =>'max:30|exists:clients,id'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $Ups = Ups::find($id);

        $Ups->invNum = $request->invNum;
        $Ups->Other = $request->Other;
        $Ups->client_id = $request->client_id;


        $Ups->save();

        return $Ups;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //УДАЛЕНИЕ!!!
        $Ups = Ups::find($id);
        $Ups->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
