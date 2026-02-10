<h2>New Booking Request</h2>

<p><strong>Name:</strong> {{ $appointment->first_name }} {{ $appointment->last_name }}</p>
<p><strong>Email:</strong> {{ $appointment->email }}</p>
<p><strong>Phone:</strong> {{ $appointment->phone }}</p>

<p><strong>City:</strong> {{ $appointment->city ?? '-' }}</p>
<p><strong>Nation:</strong> {{ $appointment->nation ?? '-' }}</p>

<p><strong>Gender:</strong> {{ $appointment->gender ?? '-' }}</p>
<p><strong>Height:</strong> {{ $appointment->height ?? '-' }}</p>

<p><strong>Tattoo Type:</strong> {{ $appointment->tattoo_type ?? '-' }}</p>
<p><strong>Placement:</strong> {{ $appointment->placement ?? '-' }}</p>
<p><strong>Style:</strong> {{ $appointment->style ?? '-' }}</p>

<p><strong>Description:</strong></p>
<p>{{ $appointment->description ?? '-' }}</p>

@if(!empty($appointment->reference_images))
    <p><strong>Reference Images:</strong></p>
    <ul>
        @foreach($appointment->reference_images as $img)
            <li>{{ $img }}</li>
        @endforeach
    </ul>
@endif

@if(!empty($appointment->skin_images))
    <p><strong>Skin Area Images:</strong></p>
    <ul>
        @foreach($appointment->skin_images as $img)
            <li>{{ $img }}</li>
        @endforeach
    </ul>
@endif
