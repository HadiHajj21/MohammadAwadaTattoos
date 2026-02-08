<?php

namespace App\Http\Controllers\Api;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AppointmentConfirmation;
use App\Http\Controllers\Controller;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'placement' => 'nullable',
            'preferred_date' => 'nullable|date',
            'description' => 'nullable|string',
        ]);

        // Save to DB
        $appointment = Appointment::create($data);

        // Send email
        Mail::to('Hadialhajj213@gmail.com')
            ->send(new AppointmentConfirmation($appointment));

        return response()->json([
            'success' => true,
            'message' => 'Appointment submitted successfully'
        ]);
    }
}
