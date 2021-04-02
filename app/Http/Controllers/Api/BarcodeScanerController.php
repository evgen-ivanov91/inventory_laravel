<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BarcodeScaner;

class BarcodeScanerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $BarcodeScaner = BarcodeScaner::all();

        return response()->json($BarcodeScaner);
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
        $BarcodeScaner = BarcodeScaner::create([
            "model" => $request->model,
            "invNum" => $request->invNum,
            "serialNum" => $request->serialNum,
            "Other" => $request->Other,
            "client_id" => $request->client_id


        ]);
        return [
            "status" => true,
            "BarcodeScaner" => $BarcodeScaner
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
        $BarcodeScaner = BarcodeScaner::find($id);
//        dd($Printer->Client);  отдает вместе с пользователем
        if(!$BarcodeScaner){
            return BarcodeScaner()->json([
                "status"=>false,
                "message"=>"equipment not found"
            ])->setStatusCode(404);
        }
        return $BarcodeScaner;
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
        $BarcodeScaner = BarcodeScaner::find($id);

        $BarcodeScaner->invNum = $request->invNum;
        $BarcodeScaner->Other = $request->Other;
        $BarcodeScaner->client_id = $request->client_id;


        $BarcodeScaner->save();

        return $BarcodeScaner;

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
        $BarcodeScaner = BarcodeScaner::find($id);
        $BarcodeScaner->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
