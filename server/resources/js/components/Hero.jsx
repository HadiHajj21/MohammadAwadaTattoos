import React from 'react';

const R2_PUBLIC_URL = 'https://pub-d752ec4acc1b4cd8ab4972feccc02b93.r2.dev';
const HERO_IMAGE = 'ImageH.jpeg';

export default function Hero() {
  return (
    <section
      style={{
        ...styles.hero,
        backgroundImage: `url(${R2_PUBLIC_URL}/${HERO_IMAGE})`,
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
    border: 'none',
    cursor: 'pointer',
  },
};
