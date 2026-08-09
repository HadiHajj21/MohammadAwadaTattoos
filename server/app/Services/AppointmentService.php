<?php

namespace App\Services;
use Illuminate\Support\Facades\Mail;
use App\Mail\AppointmentConfirmationForClient;
use App\Mail\NewAppointmentForArtist;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentService
{
    public function create(Request $request, array $referenceImages, array $skinImages): Appointment
    {
        $appointment = Appointment::create([

            'first_name' => $request->first_name,

            'last_name' => $request->last_name,

            'email' => $request->email,

            'phone' => $request->phone,

            'city' => $request->city,

            'country' => $request->country,

            'gender' => $request->gender,

            'height_cm' => $request->height_cm,

            'tattoo_type' => $request->tattoo_type,

            'placement' => $request->placement,

            'tattoo_style' => $request->tattoo_style,

            'description' => $request->description,

            'reference_images' => $referenceImages,

            'skin_images' => $skinImages,

            'status' => 'pending',

            'notes' => null,

        ]);

        $appointment->booking_number = sprintf(
            'MAT-%s-%06d',
            now()->year,
            $appointment->id
        );

        $appointment->save();

        $appointment->refresh();
        
        Mail::send(new AppointmentConfirmationForClient($appointment));
        Mail::send(new NewAppointmentForArtist($appointment));


        return $appointment;
    }
}