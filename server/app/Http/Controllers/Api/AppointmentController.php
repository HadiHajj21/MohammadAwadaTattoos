<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Services\AppointmentService;



class AppointmentController extends Controller
{
    protected AppointmentService $appointmentService;

    public function __construct(AppointmentService $appointmentService)
    {
        $this->appointmentService = $appointmentService;
    }

    public function store(Request $request)
    {
        /*
        |--------------------------------------------------------------------------
        | Validate
        |--------------------------------------------------------------------------
        */

        $validator = Validator::make($request->all(), [

            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',

            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',

            'city' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',

            'gender' => 'nullable|string',

            'height_cm' => 'nullable|integer',

            'tattoo_type' => 'nullable|string',

            'placement' => 'nullable|string',

            'tattoo_style' => 'nullable|string',

            'description' => 'nullable|string',

            'accepted' => 'required',

            'reference_images.*' => 'image|max:10240',

            'skin_images.*' => 'image|max:10240',

        ]);

        if ($validator->fails()) {

            return response()->json([

                'success' => false,

                'errors' => $validator->errors(),

            ], 422);

        }

        /*
        |--------------------------------------------------------------------------
        | Upload Images
        |--------------------------------------------------------------------------
        */

        $referenceImages = [];

        if ($request->hasFile('reference_images')) {

            foreach ($request->file('reference_images') as $image) {

                $path = $image->store(
                    'appointments/reference',
                    'r2'
                );

                $referenceImages[] = $path;
            }

        }

        $skinImages = [];

        if ($request->hasFile('skin_images')) {

            foreach ($request->file('skin_images') as $image) {

                $path = $image->store(
                    'appointments/skin',
                    'r2'
                );

                $skinImages[] = $path;
            }

        }

        /*
        |--------------------------------------------------------------------------
        | Save Appointment
        |--------------------------------------------------------------------------
        */

        $appointment = $this->appointmentService->create(
            $request,
            $referenceImages,
            $skinImages
        );

        /*
        |--------------------------------------------------------------------------
        | Success
        |--------------------------------------------------------------------------
        */

        return response()->json([

            'success' => true,

            'message' => 'Appointment created successfully.',

            'appointment' => $appointment,

        ]);
    }
}