<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Validator;

class ClientsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client = Client::with(['allTech',
            'allMonitors',
            'allBarcodeScaner',
            'allHeadphones',
            'allKeyboard',
            'allMfp',
            'allMouse',
            'allOther',
            'allPhotoscan',
            'allPrinter',
            'allScan',
            'allSpeakers',
            'allCartridges'])->get();

        return response()->json($client);
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
              'pib' =>'required| string| min: 5| max: 50',
              'locations' =>'required| string| min: 1| max:50',
              'departament' =>'string| max: 150',
              'position' =>'string| max: 150',
              'phone' =>'string| max: 20',
              'login' =>'string| max: 20',
              'email' =>'string| email| max: 50',
              'numline' =>'string| min: 3| max: 5',
              'status' =>'string| max: 50',
              'dob' => 'min:6'
          ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        $client = Client::create([
            "pib" => $request->pib,
            "locations" => $request->locations,
            "departament" => $request->departament,
            "position" => $request->position,
            "phone" => $request->phone,
            "dob" => $request->dob,
            "login" => $request->login,
            "email" => $request->email,
            "numline" => $request->numline,
            "status" => $request->status
        ]);
        return [
            "status" => true,
            "client" => $client
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
        $client = Client::find($id);
        if(!$client){
            return response()->json([
                "status"=>false,
                "message"=>"Client not found"
            ])->setStatusCode(404);
        }
        return $client;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {


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
                'pib' =>'required| string| min: 5| max: 50',
                'locations' =>'required| string| min: 1| max:50',
                'departament' =>'string| min: 5| max: 150',
                'position' =>'string| min: 5| max: 150',
                'phone' =>'string| min: 3| max: 20',
                'login' =>'string| min: 3| max: 20',
                'email' =>'string| email| min: 3| max: 20',
                'numline' =>'string| min: 3| max: 5',
                'status' =>'string| min: 1| max: 50',
                'dob' => 'min:6'
            ]
        );
        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ] ;
        }
        // ИЗМЕНЕНИЕ надо добавить валидацию!
        $client = Client::find($id);

        $client->pib = $request->pib;
        $client->locations = $request->locations;
        $client->position = $request->position;
        $client->phone = $request->phone;
        $client->dob = $request->dob;
        $client->login = $request->login;
        $client->email = $request->email;
        $client->numline = $request->numline;
        $client->status = $request->status;

        $client->save();

        return $client;

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
        $client = Client::find($id);
        $client->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
