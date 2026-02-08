import { useEffect, useState } from 'react';

const R2_PUBLIC_URL = 'https://pub-d752ec4acc1b4cd8ab4972feccc02b93.r2.dev';

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch('/api/hero')
      .then(res => res.json())
      .then(data => setHeroUrl(`${R2_PUBLIC_URL}/${data.image}`));
  }, []);

  return (
    <section
      style={{
        ...styles.hero,
        backgroundImage: hero ? `url(${R2_PUBLIC_URL}/${hero})` : 'none',
      }}
    >
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
    justifyContent: 'center',
  },
  button: {
    fontSize: 28,
    padding: '20px 50px',
    background: '#000',
    color: '#fff',
  },
};
