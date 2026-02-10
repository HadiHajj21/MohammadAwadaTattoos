<h2>Booking Request Received ✅</h2>

<p>Hi {{ $appointment->first_name }},</p>

<p>
    Thanks for your booking request. We received it successfully.
    Mohammad will contact you soon to confirm details and availability.
</p>

<p><strong>Your details:</strong></p>
<ul>
    <li><strong>Name:</strong> {{ $appointment->first_name }} {{ $appointment->last_name }}</li>
    <li><strong>Phone:</strong> {{ $appointment->phone }}</li>
    <li><strong>Placement:</strong> {{ $appointment->placement ?? '-' }}</li>
    <li><strong>Style:</strong> {{ $appointment->style ?? '-' }}</li>
</ul>

<p>— Mohammad Awada Studio</p>
