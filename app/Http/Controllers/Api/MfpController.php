<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mfp;

use Validator;
class MfpController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Mfp = Mfp::all();

        return response()->json($Mfp);
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
                'serialNum' =>'unique:mfps| max: 50',
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
        $Mfp = Mfp::create([
            "model" => $request->model,
            "invNum" => $request->invNum,
            "serialNum" => $request->serialNum,
            "Other" => $request->Other,
            "client_id" => $request->client_id


        ]);
        return [
            "status" => true,
            "Mfp" => $Mfp
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
        $Mfp = Mfp::find($id);
//        dd($Printer->Client);  отдает вместе с пользователем
        if(!$Mfp){
            return Mfp()->json([
                "status"=>false,
                "message"=>"equipment not found"
            ])->setStatusCode(404);
        }
        return $Mfp;
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
        $Mfp = Mfp::find($id);

        $Mfp->invNum = $request->invNum;
        $Mfp->Other = $request->Other;
        $Mfp->client_id = $request->client_id;


        $Mfp->save();

        return $Mfp;

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
        $Mfp = Mfp::find($id);
        $Mfp->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
