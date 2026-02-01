import { useEffect, useState } from 'react';

const R2_PUBLIC_URL = 'https://pub-d752ec4acc1b4cd8ab4972feccc02b93.r2.dev';

export default function Hero() {
  const [heroUrl, setHeroUrl] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/hero-image')
      .then(res => {
        if (!res.ok) throw new Error('Hero image not found');
        return res.json();
      })
      .then(data => {
        // Combines R2 URL with the path from the DB
        setHeroUrl(`${R2_PUBLIC_URL}/${data.image}`);
      })
      .catch(err => {
        console.error(err);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <section style={styles.fallback}>
        <h1>Mohammad Awada</h1>
        <p>Tattoo Artist</p>
      </section>
    );
  }

  return (
    <section
      style={{
        ...styles.hero,
        backgroundImage: heroUrl ? `url(${heroUrl})` : 'none',
      }}
    >
      <div style={styles.overlay}>
        <button style={styles.button}>Book Now</button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)', // Darkens background to make button pop
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallback: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#111',
    color: '#fff',
  },
  button: {
    fontSize: 28,
    padding: '20px 50px',
    background: '#fff',
    color: '#000',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
  },
};