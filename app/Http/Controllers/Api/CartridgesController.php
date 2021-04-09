<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cartridges;
use Validator;
class CartridgesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Cartridges = Cartridges::all();

        return response()->json($Cartridges);
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
                'serialNum' =>'unique:cartridges| max: 50',
                'compatibility' =>' max: 150',
                'take' =>'max: 50',
                'fueled' =>'max: 50',
                'issued' =>' max: 50',
                'client_id' =>'max:30|exists:clients,id',
                'status' =>' max: 1'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $Cartridges = Cartridges::create([
            "model" => $request->model,
            "invNum" => $request->invNum,
            "serialNum" => $request->serialNum,
            "compatibility" => $request->compatibility,
            "take" => $request->take,
            "fueled" => $request->fueled,
            "issued" => $request->issued,
            "status" => $request->status,
            "client_id" => $request->client_id

        ]);
        return [
            "status" => true,
            "Cartridges" => $Cartridges
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
        $Cartridges = Cartridges::find($id);
//        dd($Printer->Client);  отдает вместе с пользователем
        if(!$Cartridges){
            return Cartridges()->json([
                "status"=>false,
                "message"=>"equipment not found"
            ])->setStatusCode(404);
        }
        return $Cartridges;
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
                'take' =>' max: 50',
                'fueled' =>' max: 50',
                'issued' =>'max: 50',
                'client_id' =>'exist: Clients, id',
                'status' =>' max: 1'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        // ИЗМЕНЕНИЕ надо добавить валидацию!
        $Cartridges = Cartridges::find($id);

        $Cartridges->invNum = $request->invNum;
        $Cartridges->client_id = $request->client_id;
        $Cartridges->take = $request->take;
        $Cartridges->fueled = $request->fueled;
        $Cartridges->issued = $request->issued;
        $Cartridges->status = $request->status;

        $Cartridges->save();

        return $Cartridges;

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
        $Cartridges = Cartridges::find($id);
        $Cartridges->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
