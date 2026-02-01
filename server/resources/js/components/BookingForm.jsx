import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    placement: '',
    date: '',
    idea: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Request:', formData);
    alert('Thank you! Mohammad will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking-section" style={styles.section}>
      <h2 style={styles.heading}>Book an Appointment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          name="name"
          placeholder="Full Name" 
          style={styles.input} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="phone"
          placeholder="Phone Number" 
          style={styles.input} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="email"
          placeholder="Email" 
          type="email" 
          style={styles.input} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="placement"
          placeholder="Tattoo Placement (e.g. Forearm, Ribs)" 
          style={styles.input} 
          onChange={handleChange} 
        />
        <label style={styles.label}>Preferred Date</label>
        <input 
          name="date"
          type="date" 
          style={styles.input} 
          onChange={handleChange} 
        />
        <textarea 
          name="idea"
          placeholder="Describe your idea (size, style, etc.)" 
          style={{ ...styles.input, height: 120, resize: 'none' }} 
          onChange={handleChange}
        />
        <button type="submit" style={styles.button}>Send Request</button>
      </form>
    </section>
  );
}

const styles = {
  section: { 
    padding: '100px 20px', 
    backgroundColor: '#fff', 
    textAlign: 'center' 
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  form: {
    maxWidth: 500,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 15
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    fontFamily: 'inherit'
  },
  label: {
    textAlign: 'left',
    fontSize: '14px',
    color: '#666',
    marginBottom: '-10px'
  },
  button: {
    padding: '18px',
    fontSize: '18px',
    background: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginTop: '10px',
    transition: 'background 0.3s'
  }
};