const images = [
  '/images/work1.jpg',
  '/images/work2.jpg',
  '/images/work3.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" style={styles.section}>
      <h2>Recent Work</h2>
      <div style={styles.grid}>
        {images.map((img, i) => (
          <img key={i} src={img} style={styles.img} />
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '80px 40px', textAlign: 'center' },
  grid: { display: 'flex', gap: 20, justifyContent: 'center' },
  img: { width: 250, height: 250, objectFit: 'cover' }
}
