import { useState } from 'react';
import '../../css/BookingForm.css';

export default function BookingForm() {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        city: "",
        country: "",
        gender: "",
        height_cm: "",
        tattoo_type: "",
        placement: "",
        tattoo_style: "",
        description: "",
        reference_images: [],
        skin_images: [],
        accepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFiles = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: [...e.target.files],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.accepted) {
            alert("Please accept the terms first.");
            return;
        }

        setLoading(true);

        const data = new FormData();

        data.append("first_name", formData.first_name);
        data.append("last_name", formData.last_name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("city", formData.city);
        data.append("country", formData.country);
        data.append("gender", formData.gender);
        data.append("height_cm", formData.height_cm);
        data.append("tattoo_type", formData.tattoo_type);
        data.append("placement", formData.placement);
        data.append("tattoo_style", formData.tattoo_style);
        data.append("description", formData.description);
        data.append("accepted", formData.accepted ? 1 : 0);

        formData.reference_images.forEach((file) => {
            data.append("reference_images[]", file);
        });

        formData.skin_images.forEach((file) => {
            data.append("skin_images[]", file);
        });

        try {
            const response = await fetch("/api/appointments", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (!response.ok) {
                alert(result.message ?? "Booking failed.");
                return;
            }

            alert("Appointment submitted successfully!");

        } catch (error) {
            console.error(error);
            alert("Unexpected error.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="booking-section" className="booking-section">

            <div className="booking-intro">

                <span className="booking-eyebrow">
                    BEGIN YOUR JOURNEY
                </span>

                <h2>
                    BOOK A
                    <span> SESSION.</span>
                </h2>

                <p>
                    Every tattoo begins with an idea.
                    Tell Mohammad about yours and provide
                    the details needed to bring it to life.
                </p>

                <div className="booking-line" />

                <div className="booking-note">
                    <span>01</span>
                    <p>
                        Your request will be personally reviewed
                        before a session is scheduled.
                    </p>
                </div>

            </div>


            <form
                className="booking-form"
                onSubmit={handleSubmit}
            >

                {/* PERSONAL INFORMATION */}

                <div className="form-section">

                    <div className="form-section-heading">
                        <span>01</span>
                        <div>
                            <h3>Personal Information</h3>
                            <p>Tell us a little about yourself.</p>
                        </div>
                    </div>

                    <div className="form-grid two">

                        <input
                            name="first_name"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="last_name"
                            placeholder="Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-grid two">

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-grid three">

                        <input
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                        />

                        <input
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                        />

                        <input
                            name="height_cm"
                            placeholder="Height (cm)"
                            value={formData.height_cm}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="choice-group">

                        <span className="choice-label">
                            Gender
                        </span>

                        <div className="choice-options">

                            {["Male", "Female", "Other"].map((item) => (
                                <label
                                    key={item}
                                    className={
                                        formData.gender === item
                                            ? "choice active"
                                            : "choice"
                                    }
                                >
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={item}
                                        checked={formData.gender === item}
                                        onChange={handleChange}
                                    />

                                    <span>{item}</span>
                                </label>
                            ))}

                        </div>

                    </div>

                </div>


                {/* TATTOO DETAILS */}

                <div className="form-section">

                    <div className="form-section-heading">
                        <span>02</span>
                        <div>
                            <h3>The Tattoo</h3>
                            <p>Tell us about the piece you have in mind.</p>
                        </div>
                    </div>

                    <div className="choice-group">

                        <span className="choice-label">
                            Tattoo Type
                        </span>

                        <div className="choice-options">

                            {[
                                "First Tattoo",
                                "Cover Up",
                                "Existing Tattoo",
                            ].map((item) => (
                                <label
                                    key={item}
                                    className={
                                        formData.tattoo_type === item
                                            ? "choice active"
                                            : "choice"
                                    }
                                >
                                    <input
                                        type="radio"
                                        name="tattoo_type"
                                        value={item}
                                        checked={formData.tattoo_type === item}
                                        onChange={handleChange}
                                    />

                                    <span>{item}</span>
                                </label>
                            ))}

                        </div>

                    </div>

                    <div className="form-grid two">

                        <select
                            name="placement"
                            value={formData.placement}
                            onChange={handleChange}
                        >
                            <option value="">
                                Tattoo Placement
                            </option>

                            <option>Forearm</option>
                            <option>Upper Arm</option>
                            <option>Full Sleeve</option>
                            <option>Half Sleeve</option>
                            <option>Shoulder</option>
                            <option>Chest</option>
                            <option>Back</option>
                            <option>Ribs</option>
                            <option>Neck</option>
                            <option>Hand</option>
                            <option>Leg</option>
                            <option>Thigh</option>
                            <option>Calf</option>
                            <option>Foot</option>
                        </select>

                        <select
                            name="tattoo_style"
                            value={formData.tattoo_style}
                            onChange={handleChange}
                        >
                            <option value="">
                                Tattoo Style
                            </option>

                            <option>Fine Line</option>
                            <option>Blackwork</option>
                            <option>Realism</option>
                            <option>Micro Realism</option>
                            <option>Japanese</option>
                            <option>Neo Traditional</option>
                            <option>Traditional</option>
                            <option>Minimal</option>
                            <option>Geometric</option>
                            <option>Custom</option>
                        </select>

                    </div>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your tattoo idea..."
                    />

                </div>


                {/* IMAGES */}

                <div className="form-section">

                    <div className="form-section-heading">
                        <span>03</span>
                        <div>
                            <h3>Visual References</h3>
                            <p>
                                Images help us understand your vision.
                            </p>
                        </div>
                    </div>

                    <div className="upload-grid">

                        <label className="upload-card">

                            <div className="upload-icon">
                                +
                            </div>

                            <strong>
                                Reference Images
                            </strong>

                            <p>
                                Inspiration, artwork or examples
                                of what you're looking for.
                            </p>

                            <span className="upload-action">
                                CHOOSE FILES
                            </span>

                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                name="reference_images"
                                onChange={handleFiles}
                            />

                            {formData.reference_images.length > 0 && (
                                <small>
                                    {formData.reference_images.length} image(s) selected
                                </small>
                            )}

                        </label>


                        <label className="upload-card">

                            <div className="upload-icon">
                                +
                            </div>

                            <strong>
                                Skin Area Photos
                            </strong>

                            <p>
                                Clear photos of the area where
                                the tattoo will be placed.
                            </p>

                            <span className="upload-action">
                                CHOOSE FILES
                            </span>

                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                name="skin_images"
                                onChange={handleFiles}
                            />

                            {formData.skin_images.length > 0 && (
                                <small>
                                    {formData.skin_images.length} image(s) selected
                                </small>
                            )}

                        </label>

                    </div>

                </div>


                {/* TERMS */}

                <div className="form-footer">

                    <label className="terms">

                        <input
                            type="checkbox"
                            name="accepted"
                            checked={formData.accepted}
                            onChange={handleChange}
                            required
                        />

                        <span>
                            I confirm that all information provided is accurate
                            and I accept the studio's terms and privacy policy.
                        </span>

                    </label>


                    <button
                        type="submit"
                        className="booking-submit"
                        disabled={loading}
                    >

                        <span>
                            {loading
                                ? "SUBMITTING..."
                                : "REQUEST A SESSION"}
                        </span>

                        <strong>
                            ↗
                        </strong>

                    </button>

                </div>

            </form>

        </section>
    );
}