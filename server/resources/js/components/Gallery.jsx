import { useEffect, useState } from 'react';

const R2_PUBLIC_URL = 'https://pub-d752ec4acc1b4cd8ab4972feccc02b93.r2.dev';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => setImages(data)); // Data will NOT include ImageH
  }, []);

  return (
    <section id='gallery' style={styles.section}>
      <h2>Recent Work</h2>

      <div style={styles.grid}>
        {images.map((img, i) => (
          <img
            key={i}
            src={`${R2_PUBLIC_URL}/${img.image}`}
            style={styles.img}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: 80, textAlign: 'center' },
  grid: { display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' },
  img: { width: 250, height: 250, objectFit: 'cover' },
};
