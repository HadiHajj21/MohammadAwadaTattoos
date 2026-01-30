const scrollTo = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <strong>MA Tattoos</strong>
      <div style={styles.links}>
        <span onClick={() => scrollTo('about')}>About</span>
        <span onClick={() => scrollTo('gallery')}>Work</span>
        <span onClick={() => scrollTo('booking')}>Book</span>
        <span onClick={() => scrollTo('location')}>Location</span>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '15px 40px',
    background: '#000',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1000
  },
  links: {
    display: 'flex',
    gap: 20,
    cursor: 'pointer'
  }
}
