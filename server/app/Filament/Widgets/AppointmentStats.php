<?php

namespace App\Filament\Widgets;

use App\Models\Appointment;
use App\Models\Gallery;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class AppointmentStats extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        return [

            Stat::make(
                'Pending Appointments',
                Appointment::where('status', 'Pending')->count()
            )
                ->description('Awaiting review')
                ->color('warning'),

            Stat::make(
                'Completed',
                Appointment::where('status', 'Completed')->count()
            )
                ->description('Finished tattoos')
                ->color('success'),

            Stat::make(
                'Total Appointments',
                Appointment::count()
            )
                ->description('All bookings')
                ->color('primary'),

            Stat::make(
                'Gallery Images',
                Gallery::count()
            )
                ->description('Website gallery')
                ->color('info'),

        ];
    }
}