import { useEffect, useState } from 'react';

const R2_PUBLIC_URL = 'https://pub-d752ec4acc1b4cd8ab4972feccc02b93.r2.dev';

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
            /* Use img.image_path if that is what your database column is named */
            src={`${R2_PUBLIC_URL}/${img.image_path || img}`} 
            alt="Gallery work"
            style={styles.img}
            onError={(e) => console.log("Failed to load:", e.target.src)} // Helpful for debugging
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
  img: { width: 250, height: 250, objectFit: 'cover' },
};
