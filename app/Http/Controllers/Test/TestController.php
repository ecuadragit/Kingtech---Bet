<?php

namespace App\Http\Controllers\Test;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Test/Index');  
        
    //   Obtener todos los clientes
    //   transacciones = Transaction::all();        
    //   Formatear los clientes usando ClienteResource
    //   transaccionesFormateados = TransactionResource::collection($transacciones);
    //   Devolver los clientes formateados como una respuesta JSON
    //   return response()->json($transaccionesFormateados);

     }
}
