import { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/gallery-images')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="gallery" style={styles.section}>
      <h2>Recent Work</h2>
      <div style={styles.grid}>
        {images.length === 0 ? (
          <p>Loading images...</p>
        ) : (
          images.map((img, i) => (
            <img
              key={i}
              src={`/storage/${img}`} // <-- prepend storage/
              alt="Gallery work"
              style={styles.img}
            />
          ))
        )}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '80px 40px', textAlign: 'center' },
  grid: { display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' },
  img: { width: 250, height: 250, objectFit: 'cover' }
};
