import { useEffect, useState } from 'react';

const R2_PUBLIC_URL = 'https://pub-d752ec4acc1b4cd8ab4972feccc02b93.r2.dev';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/gallery-images')
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="gallery" style={styles.section}>
      <h2 style={styles.title}>Recent Work</h2>
      
      {loading ? (
        <p>Loading gallery...</p>
      ) : (
        <div style={styles.grid}>
          {images.length === 0 ? (
            <p>No images found.</p>
          ) : (
            images.map((img, i) => (
              <div key={i} style={styles.card}>
                <img
                  src={`${R2_PUBLIC_URL}/${img.image}`} 
                  alt={img.title}
                  style={styles.img}
                  onError={(e) => {
                    console.log("Failed to load:", e.target.src);
                    e.target.parentElement.style.display = 'none';
                  }}
                />
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}

const styles = {
  section: { padding: '80px 20px', textAlign: 'center', background: '#000' },
  title: { color: '#fff', marginBottom: '40px', fontSize: '2.5rem' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '15px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: { overflow: 'hidden', borderRadius: '4px' },
  img: { 
    width: '100%', 
    height: '400px', 
    objectFit: 'cover', 
    display: 'block',
    transition: 'transform 0.5s ease',
  },
};