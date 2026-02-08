import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    nation: '',
    gender: '',
    height: '',
    tattooType: '',
    placement: '',
    style: '',
    description: '',
    referenceImages: [],
    skinImages: [],
    accepted: false,
  });

  /* -----------------------------
     HANDLERS
  ----------------------------- */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFiles = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [...e.target.files],
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const fd = new FormData();

  Object.entries(formData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(file => fd.append(key + '[]', file));
    } else {
      fd.append(key, value);
    }
  });

  await fetch('/api/appointments', {
    method: 'POST',
    body: fd,
  });

  alert('Appointment submitted successfully!');
};


  /* -----------------------------
     JSX
  ----------------------------- */

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Client Appointment Form</h2>
      <p style={styles.subtitle}>
        Please fill the form below and we will get in contact with you shortly
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* NAME */}
        <div style={styles.row}>
          <input
            name="firstName"
            placeholder="First Name"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            style={styles.input}
            onChange={handleChange}
            required
          />
        </div>

        {/* EMAIL */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          style={styles.input}
          onChange={handleChange}
          required
        />

        {/* PHONE */}
        <input
          name="phone"
          placeholder="Phone"
          style={styles.input}
          onChange={handleChange}
          required
        />

        {/* CITY + NATION */}
        <div style={styles.row}>
          <input
            name="city"
            placeholder="City"
            style={styles.input}
            onChange={handleChange}
          />
          <input
            name="nation"
            placeholder="Nation"
            style={styles.input}
            onChange={handleChange}
          />
        </div>

        {/* GENDER */}
        <div style={styles.radioRow}>
          <label>Gender:</label>

          {['Male', 'Female', 'Other'].map((g) => (
            <label key={g}>
              <input
                type="radio"
                name="gender"
                value={g}
                onChange={handleChange}
              />
              {g}
            </label>
          ))}
        </div>

        {/* HEIGHT */}
        <input
          name="height"
          placeholder="Height (cm)"
          style={styles.input}
          onChange={handleChange}
        />

        {/* TATTOO TYPE */}
        <div style={styles.radioRow}>
          <label>Tattoo Type:</label>

          {['First tattoo', 'Cover up', 'Other'].map((t) => (
            <label key={t}>
              <input
                type="radio"
                name="tattooType"
                value={t}
                onChange={handleChange}
              />
              {t}
            </label>
          ))}
        </div>

        {/* PLACEMENT */}
        <select name="placement" style={styles.input} onChange={handleChange}>
          <option value="">Choose placement</option>
          <option>Arm</option>
          <option>Leg</option>
          <option>Back</option>
          <option>Chest</option>
          <option>Neck</option>
        </select>

        {/* STYLE */}
        <select name="style" style={styles.input} onChange={handleChange}>
          <option value="">Choose style</option>
          <option>Blackwork</option>
          <option>Realism</option>
          <option>Minimal</option>
          <option>Fine Line</option>
          <option>Custom</option>
        </select>

        {/* DESCRIPTION */}
        <textarea
          name="description"
          placeholder="Describe your tattoo idea"
          style={styles.textarea}
          onChange={handleChange}
        />

        {/* FILE UPLOADS */}
        <label style={styles.fileLabel}>
          Reference Images
          <input
            type="file"
            name="referenceImages"
            multiple
            onChange={handleFiles}
          />
        </label>

        <label style={styles.fileLabel}>
          Skin Area Photos
          <input
            type="file"
            name="skinImages"
            multiple
            onChange={handleFiles}
          />
        </label>

        {/* TERMS */}
        <label style={styles.checkbox}>
          <input
            type="checkbox"
            name="accepted"
            onChange={handleChange}
          />
          I accept the terms and privacy policy
        </label>

        <button type="submit" style={styles.button}>
          Book
        </button>
      </form>
    </section>
  );
}

/* -----------------------------
   STYLES
----------------------------- */

const styles = {
  section: {
    padding: '80px 20px',
    background: '#f3f3f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 6,
  },

  subtitle: {
    marginBottom: 40,
    color: '#666',
    fontSize: 14,
  },

  form: {
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },

  row: {
    display: 'flex',
    gap: 12,
  },

  input: {
    padding: 12,
    borderRadius: 6,
    border: '1px solid #ccc',
    flex: 1,
  },

  textarea: {
    padding: 12,
    minHeight: 120,
    borderRadius: 6,
    border: '1px solid #ccc',
    resize: 'none',
  },

  radioRow: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  fileLabel: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    fontSize: 14,
  },

  checkbox: {
    fontSize: 14,
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },

  button: {
    padding: 16,
    background: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
