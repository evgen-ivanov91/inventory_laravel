<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Photoscan;

class PhotoscanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Photoscan = Photoscan::all();

        return response()->json($Photoscan);
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
        $Photoscan = Photoscan::create([
            "model" => $request->model,
            "invNum" => $request->invNum,
            "serialNum" => $request->serialNum,
            "Other" => $request->Other,
            "client_id" => $request->client_id


        ]);
        return [
            "status" => true,
            "Photoscan" => $Photoscan
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
        $Photoscan = Photoscan::find($id);
//        dd($Printer->Client);  отдает вместе с пользователем
        if(!$Photoscan){
            return Photoscan()->json([
                "status"=>false,
                "message"=>"equipment not found"
            ])->setStatusCode(404);
        }
        return $Photoscan;
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
        $Photoscan = Photoscan::find($id);

        $Photoscan->invNum = $request->invNum;
        $Photoscan->Other = $request->Other;
        $Photoscan->client_id = $request->client_id;


        $Photoscan->save();

        return $Photoscan;

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
        $Photoscan = Photoscan::find($id);
        $Photoscan->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
