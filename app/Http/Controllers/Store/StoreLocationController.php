<?php

namespace App\Http\Controllers\Store;

use App\Http\Controllers\Controller;
use App\Http\Resources\LocallocationResource; // Import PersonResource


use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Locationlocal;

class StoreLocationController extends Controller
{
    public function index()
    {
       
        // Obtener las plataformas (suponiendo que esto ya está funcionando correctamente)
        $tiendaslocacion = Locationlocal::all();
    
        // Formatear las plataformas utilizando PlatformResource
        $tiendaslocacionFormateadas = LocallocationResource::collection($tiendaslocacion);
    
        // Agregar el array adicional al arreglo de datos que se pasará a la plantilla Inertia
        return Inertia::render('Admin/StoreLocation/Index', [
            'tiendaslocacion' => $tiendaslocacionFormateadas
        ]);
    }
    
    public function store(Request $request)
    {

    //     $request->validate([           
    //     'fecha' => 'date',
    //     'dni' => 'string',
    //     'medio_de_contacto' => 'string',
    //     'medio_de_respuesta' => 'string',
    //     'como_llego_a_la_marca' => 'string',
    //     'tipo_negocio' => 'string',
    //     'estado' => 'string',
    //     'respuesta_asesor' => 'string',
    //     'primer_contacto' => 'string',
    //     'segundo_contacto' => 'string',
    //     'tercer_contacto' => 'string',
    //     'contacto' => 'string',
    //     'realizo_la_venta' => 'string',
    //     'futuro_socio' => 'string',
    // ]);
    //    dd($request->all()); 
    //    Crear el cliente si pasa todas las validaciones

    $LocalesUbicacion = Locationlocal::create($request->all());

    // $mensaje = "Este es un mensaje de texto simple desde un controlador de Laravel.";
    // return response($mensaje, 200)
    //     ->header('Content-Type', 'text/plain'); 


        if ($LocalesUbicacion) {
        $message = 'Cliente creado satisfactoriamente';

        return response()->json([
            'message' => $message,
            'status' => 200
        ]);
            }else{
            $message = 'Cliente no fue creado satisfactoriamente';

            return response()->json([
                'message' => $message,
                'status' => 404
        ]);
        
    }
     
       return redirect()->route('clients.index');
    }

    public function update(Request $request, $id)
    {
        $request->validate([           
            'fecha' => 'date',
            'dni' => 'string',
            'medio_de_contacto' => 'string',
            'medio_de_respuesta' => 'string',
            'como_llego_a_la_marca' => 'string',
            'tipo_negocio' => 'string',
            'producto_o_servicio' => 'string',
            'estado' => 'string',
            'respuesta_asesor' => 'string',
            'primer_contacto' => 'string',
            'segundo_contacto' => 'string',
            'tercer_contacto' => 'string',
            'contacto' => 'string',
            'realizo_la_venta' => 'string',
            'futuro_socio' => 'string',
        ]);
    
        // Obtener el cliente por su ID
        $LocalesUbicacion = Locationlocal::find($id);
    
        if (!$LocalesUbicacion) {
            $message = 'Cliente no encontrado';
            return response()->json([
                'message' => $message,
                'status' => 404
            ]);
        }else{
            // Actualizar los datos del cliente
            $LocalesUbicacion->update($request->all());                
            $message = 'Cliente actualizado satisfactoriamente';

            return response()->json([
                'message' => $message,
                'status' => 200
            ]);

        }
    
       
    }   
    
    public function destroy($id)
    {
        $LocalesUbicacion = Locationlocal::findOrFail($id);
        // Aquí podrías agregar la validación de autorización si es necesario
        try {
            $LocalesUbicacion->delete();
            return redirect()->route('clients.index')->with('success', 'Cliente eliminado correctamente.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Ha ocurrido un error al eliminar el cliente.');
        }
    }

      
    public function filterByDate(Request $request)
    {
        $fecha = $request->input('fecha');

        $clientes = Locationlocal::whereDate('created_at', $fecha)->get();

        return response()->json([
            'clientes' => LocallocationResource::collection($clientes)
        ]);
    }

    public function filterByDateRange(Request $request)
    {
        $fechaInicio = $request->input('fecha_inicio');
        $fechaFin = $request->input('fecha_fin');

        $clientes = Locationlocal::whereDate('created_at', '>=', $fechaInicio)
                            ->whereDate('created_at', '<=', $fechaFin)
                            ->get();

        return response()->json([
            'clientes' => LocallocationResource::collection($clientes)
        ]);
    }

}
