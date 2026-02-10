<?php

namespace App\Mail;

use App\Models\Appointment;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AppointmentConfirmationForClient extends Mailable
{
    use SerializesModels;

    public function __construct(public Appointment $appointment) {}

    public function build()
    {
        return $this
        ->from(config('mail.from.address'), config('mail.from.name'))
        ->replyTo(config('mail.reply_to.address') ?? config('mail.from.address'),
                 config('mail.reply_to.name') ?? config('mail.from.name'))
        ->subject('We received your booking request')
        ->view('emails.appointments.client');
    }
}
