<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CompMouses;

class CompMousesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $CompMouses = CompMouses::all();

        return response()->json($CompMouses);
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
//                тут будет валидация
//                'pib' =>'required',
//                'locations' =>'min:1',
//                'dob' => 'min:6'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $CompMouses = CompMouses::create([
            "model" => $request->model,
            "invNum" => $request->invNum,
            "serialNum" => $request->serialNum,
            "Other" => $request->Other,
            "client_id" => $request->client_id


        ]);
        return [
            "status" => true,
            "CompMouses" => $CompMouses
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
        $CompMouses = CompMouses::find($id);
//        dd($Printer->Client);  отдает вместе с пользователем
        if(!$CompMouses){
            return CompMouses()->json([
                "status"=>false,
                "message"=>"equipment not found"
            ])->setStatusCode(404);
        }
        return $CompMouses;
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

        // ИЗМЕНЕНИЕ надо добавить валидацию!
        $CompMouses = CompMouses::find($id);

        $CompMouses->invNum = $request->invNum;
        $CompMouses->Other = $request->Other;
        $CompMouses->client_id = $request->client_id;


        $CompMouses->save();

        return $CompMouses;

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
        $CompMouses = CompMouses::find($id);
        $CompMouses->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
