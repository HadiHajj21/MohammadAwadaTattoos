<?php

namespace App\Mail;

use App\Models\Appointment;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewAppointmentForArtist extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Appointment $appointment
    ) {}

    public function build()
    {
        return $this
            ->from(
                config('mail.from.address'),
                config('mail.from.name')
            )
            ->to(config('mail.artist_email'))
            ->subject(
                'New Booking Request - ' . $this->appointment->booking_number
            )
            ->view('emails.appointments.artist');
    }
}