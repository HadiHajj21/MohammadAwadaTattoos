export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Instagram: @ma_tattoos</p>
      <p>Phone: +961 XX XXX XXX</p>
      <p>Email: contact@matattoos.com</p>
    </footer>
  )
}

const styles = {
  footer: {
    padding: 40,
    background: '#000',
    color: '#fff',
    textAlign: 'center'
  }
}
