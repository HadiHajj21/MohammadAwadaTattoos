import { useEffect, useState } from 'react';

export default function Hero() {
  const [heroUrl, setHeroUrl] = useState('/images/imageH.jpeg'); // fallback

  useEffect(() => {
    fetch('/storage/imageH.jpeg', { method: 'HEAD' })
      .then(res => {
        if (res.ok) setHeroUrl('/storage/imageH.jpeg');
      })
      .catch(() => {});
  }, []);

  return (
    <section style={{ ...styles.hero, backgroundImage: `url(${heroUrl})` }}>
      <button style={styles.button}>Book Now</button>
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
};
