export default function MapSection() {
  return (
    <section id="location" style={{ padding: 80 }}>
      <h2>Studio Location</h2>
      <iframe
        width="100%"
        height="300"
        loading="lazy"
        src="https://www.google.com/maps?q=beirut&output=embed"
      ></iframe>
    </section>
  )
}
