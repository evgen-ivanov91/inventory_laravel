<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Printer;

use Validator;
class PrintersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        $Printer = Printer::with('Client');
        $Printer = Printer::all();
        return response()->json($Printer);
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
                'model' =>'required| min: 3| max: 50',
                'invNum' =>'required| min: 1| max:20',
                'serialNum' =>'unique:printers| max: 50',
                'Other' =>'max: 300',
                'client_id' =>'max:30|exists:clients,id'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $Printer = Printer::create([
            "model" => $request->model,
            "invNum" => $request->invNum,
            "serialNum" => $request->serialNum,
            "Other" => $request->Other,
            "client_id" => $request->client_id


        ]);
        return [
            "status" => true,
            "Printer" => $Printer
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
        $Printer = Printer::find($id);
//        dd($Printer->Client);  отдает вместе с пользователем
        if(!$Printer){
            return response()->json([
                "status"=>false,
                "message"=>"Client not found"
            ])->setStatusCode(404);
        }
        return $Printer;
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

                'invNum' =>'required| min: 1| max:20',

                'Other' =>'max: 300',
                'client_id' =>'max:30|exists:clients,id'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $Printer = Printer::find($id);

        $Printer->invNum = $request->invNum;
        $Printer->Other = $request->Other;
        $Printer->client_id = $request->client_id;


        $Printer->save();

        return $Printer;

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
        $Printer = Printer::find($id);
        $Printer->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
