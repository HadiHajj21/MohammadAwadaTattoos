<!DOCTYPE html>
<html>
<head>
    <title>Appointment Confirmed</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h1>Hello, {{ $appointment->client_name }}!</h1>
    
    <p>Thank you for booking with us. Your appointment has been received.</p>
    
    <h3>Details:</h3>
    <ul>
        <li><strong>Date:</strong> {{ $appointment->date }}</li>
        <li><strong>Time:</strong> {{ $appointment->time }}</li>
        <li><strong>Service:</strong> {{ $appointment->service_type }}</li>
    </ul>

    <p>We look forward to seeing you!</p>
</body>
</html>