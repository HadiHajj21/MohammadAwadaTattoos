export default function About() {
  return (
    <section id="about" style={styles.section}>
      <h2>About the Artist</h2>
      <p>
        Mohammad Awada is a professional tattoo artist known for clean lines,
        detailed work, and custom designs tailored to each client.
      </p>
    </section>
  )
}

const styles = {
  section: {
    padding: '100px 40px',
    maxWidth: 900,
    margin: 'auto'
  }
}
