<?php

namespace App\Mail;

use App\Models\Appointment;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewAppointmentForArtist extends Mailable
{
    use SerializesModels;

    public function __construct(public Appointment $appointment) {}

    public function build()
    {
        return $this
        ->from(config('mail.from.address'), config('mail.from.name'))
        ->replyTo($this->appointment->email, $this->appointment->first_name . ' ' . $this->appointment->last_name)
        ->subject('New Booking Request')
        ->view('emails.appointments.artist');

    }
}
