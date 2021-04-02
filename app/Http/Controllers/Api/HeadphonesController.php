<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Headphones;
class HeadphonesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Headphones = Headphones::all();

        return response()->json($Headphones);
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
        $Headphones = Headphones::create([
            "model" => $request->model,
            "invNum" => $request->invNum,
            "serialNum" => $request->serialNum,
            "Other" => $request->Other,
            "client_id" => $request->client_id


        ]);
        return [
            "status" => true,
            "Headphones" => $Headphones
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
        $Headphones = Headphones::find($id);
//        dd($Printer->Client);  отдает вместе с пользователем
        if(!$Headphones){
            return Headphones()->json([
                "status"=>false,
                "message"=>"equipment not found"
            ])->setStatusCode(404);
        }
        return $Headphones;
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
        $Headphones = Headphones::find($id);

        $Headphones->invNum = $request->invNum;
        $Headphones->Other = $request->Other;
        $Headphones->client_id = $request->client_id;


        $Headphones->save();

        return $Headphones;

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
        $Headphones = Headphones::find($id);
        $Headphones->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
