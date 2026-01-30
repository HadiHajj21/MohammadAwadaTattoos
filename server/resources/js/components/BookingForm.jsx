export default function BookingForm() {
  return (
    <section id="booking" style={styles.section}>
      <h2>Book an Appointment</h2>
      <form style={styles.form}>
        <input placeholder="Full Name" />
        <input placeholder="Phone Number" />
        <input placeholder="Email" />
        <input placeholder="Tattoo Placement" />
        <input placeholder="Preferred Date" type="date" />
        <textarea placeholder="Describe your idea" />
        <button>Submit</button>
      </form>
    </section>
  )
}

const styles = {
  section: { padding: 80 },
  form: {
    maxWidth: 500,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
}
