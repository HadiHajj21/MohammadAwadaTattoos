export default function Hero() {
  return (
    <section style={styles.hero}>
      <button style={styles.button}>Book Now</button>
    </section>
  )
}

const styles = {
  hero: {
    height: '100vh',
    backgroundImage: 'url(/images/hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    fontSize: 28,
    padding: '20px 50px',
    background: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  }
}
