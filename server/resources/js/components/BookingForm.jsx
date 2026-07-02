import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

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
            [name]: type === 'checkbox'
                ? checked
                : value,
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

    const data = new FormData();

    // Normal fields
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

    // Reference Images
    formData.reference_images.forEach((file) => {
        data.append("reference_images[]", file);
    });

    // Skin Images
    formData.skin_images.forEach((file) => {
        data.append("skin_images[]", file);
    });

    try {

        const response = await fetch("/api/appointments", {
            method: "POST",
            body: data,
        });

        const result = await response.json();

        console.log(result);

        if (!response.ok) {

            alert(result.message ?? "Booking failed.");

            return;

        }

        alert("Appointment submitted successfully!");

    } catch (error) {

        console.error(error);

        alert("Unexpected error.");

    }
};

return (
  
    <section
        id="booking-section"
        style={styles.section}
    >
        <div style={styles.container}>

            <h2 style={styles.title}>
                BOOK AN APPOINTMENT
            </h2>

            <p style={styles.subtitle}>
                Fill out the form below and Mohammad Awada will review your
                request personally. Once approved, you will be contacted to
                schedule your tattoo session.
            </p>

            <form
                onSubmit={handleSubmit}
                style={styles.form}
            >

                {/* PERSONAL INFORMATION */}

                <div style={styles.sectionTitle}>
                    Personal Information
                </div>

                <div style={styles.row}>

                    <input
                        name="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />

                    <input
                        name="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />

                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <div style={styles.row}>

                    <input
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <input
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleChange}
                        style={styles.input}
                    />

                </div>

                {/* GENDER */}

                <div>

                    <div style={styles.groupTitle}>
                        Gender
                    </div>

                    <div style={styles.radioGroup}>

                        {['Male', 'Female', 'Other'].map((item) => (

                            <label
                                key={item}
                                style={styles.radioLabel}
                            >

                                <input
                                    type="radio"
                                    name="gender"
                                    value={item}
                                    checked={formData.gender === item}
                                    onChange={handleChange}
                                />

                                {item}

                            </label>

                        ))}

                    </div>

                </div>

                <input
                    name="height_cm"
                    placeholder="Height (cm)"
                    value={formData.height_cm}
                    onChange={handleChange}
                    style={styles.input}
                />

                {/* TATTOO */}

                <div style={styles.sectionTitle}>
                    Tattoo Details
                </div>

                <div>

                    <div style={styles.groupTitle}>
                        Tattoo Type
                    </div>

                    <div style={styles.radioGroup}>

                        {[
                            'First Tattoo',
                            'Cover Up',
                            'Existing Tattoo',
                        ].map((item) => (

                            <label
                                key={item}
                                style={styles.radioLabel}
                            >

                                <input
                                    type="radio"
                                    name="tattoo_type"
                                    value={item}
                                    checked={formData.tattoo_type === item}
                                    onChange={handleChange}
                                />

                                {item}

                            </label>

                        ))}

                    </div>

                </div>

                <select
                    name="placement"
                    value={formData.placement}
                    onChange={handleChange}
                    style={styles.select}
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
                    style={styles.select}
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

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your tattoo idea in as much detail as possible..."
                    style={styles.textarea}
                />

                {/* FILES */}

                <div style={styles.sectionTitle}>
                    Upload Images
                </div>

                <div style={styles.uploadBox}>

                    <strong>
                        Reference Images
                    </strong>

                    <p style={styles.uploadText}>
                        Upload inspiration images that represent your tattoo idea.
                    </p>

                    <input
                        type="file"
                        multiple
                        name="reference_images"
                        onChange={handleFiles}
                    />

                </div>

                <div style={styles.uploadBox}>

                    <strong>
                        Skin Area Photos
                    </strong>

                    <p style={styles.uploadText}>
                        Upload clear photos of the body area where the tattoo will be placed.
                    </p>

                    <input
                        type="file"
                        multiple
                        name="skin_images"
                        onChange={handleFiles}
                    />

                </div>

                {/* TERMS */}

                <label style={styles.checkbox}>

                    <input
                        type="checkbox"
                        name="accepted"
                        checked={formData.accepted}
                        onChange={handleChange}
                        required
                    />

                    I confirm that all information provided is accurate and I accept the studio's terms and privacy policy.

                </label>

                <button
                    type="submit"
                    style={styles.button}
                    disabled={loading}
                >

                    {loading
                        ? 'Submitting...'
                        : 'Book Appointment'}

                </button>

            </form>

        </div>
    </section>
)
};

const styles = {
  section: {
    backgroundColor: "#0d0d0d",
    color: "#fff",
    padding: "100px 20px",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    width: "100%",
    maxWidth: "900px",
  },

  title: {
    fontSize: "3rem",
    fontWeight: 700,
    textAlign: "center",
    letterSpacing: "2px",
    marginBottom: "15px",
  },

  subtitle: {
    textAlign: "center",
    color: "#999",
    lineHeight: 1.8,
    marginBottom: "60px",
    maxWidth: "700px",
    marginInline: "auto",
    fontSize: "15px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  sectionTitle: {
    color: "#D4AF37",
    fontSize: "22px",
    fontWeight: 600,
    borderBottom: "1px solid #2a2a2a",
    paddingBottom: "10px",
    marginTop: "20px",
  },

  row: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  input: {
    flex: 1,
    background: "#1a1a1a",
    border: "1px solid #2f2f2f",
    color: "#fff",
    padding: "16px",
    borderRadius: "10px",
    fontSize: "15px",
    transition: ".25s",
    outline: "none",
  },

  select: {
    background: "#1a1a1a",
    border: "1px solid #2f2f2f",
    color: "#fff",
    padding: "16px",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
  },

  textarea: {
    background: "#1a1a1a",
    border: "1px solid #2f2f2f",
    color: "#fff",
    padding: "18px",
    borderRadius: "10px",
    fontSize: "15px",
    minHeight: "180px",
    resize: "vertical",
    outline: "none",
  },

  groupTitle: {
    marginBottom: "12px",
    color: "#D4AF37",
    fontWeight: 600,
  },

  radioGroup: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    color: "#ddd",
    fontSize: "15px",
  },

  uploadBox: {
    border: "2px dashed #3d3d3d",
    borderRadius: "12px",
    padding: "30px",
    background: "#181818",
    textAlign: "center",
    transition: ".3s",
  },

  uploadText: {
    color: "#888",
    marginTop: "10px",
    marginBottom: "20px",
    fontSize: "14px",
  },

  checkbox: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#bbb",
    lineHeight: 1.6,
    fontSize: "14px",
  },

  button: {
    background: "#D4AF37",
    color: "#111",
    border: "none",
    padding: "18px",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "17px",
    cursor: "pointer",
    transition: ".3s",
    marginTop: "15px",
  },
};