import { useEffect, useState } from 'react';
import '../../css/app.css';
import { Canvas } from '@react-three/fiber';
import TattooMachine from './TattooMachine';

const R2_PUBLIC_URL =
    'https://pub-d752ec4acc1b4cd8ab4972feccc02b93.r2.dev';

export default function Hero() {
    const [hero, setHero] = useState(null);

    useEffect(() => {
        fetch('/api/hero')
            .then((res) => res.json())
            .then((data) => setHero(data.image))
            .catch(console.error);
    }, []);

    const scrollToBooking = () => {
        document
            .getElementById('booking-section')
            ?.scrollIntoView({
                behavior: 'smooth',
            });
    };

    return (
        <section
            className="hero"
            style={{
                backgroundImage: hero
                    ? `url(${R2_PUBLIC_URL}/${hero})`
                    : 'none',
            }}
        >
            {/* Dark cinematic overlay */}
            <div className="hero-overlay" />

            {/* Decorative gold glow */}
            <div className="hero-glow" />

            <div className="hero-content">

                <div className="hero-eyebrow">
                    MOHAMMAD AWADA
                    <span />
                    TATTOO ARTIST
                </div>

                <h1>
                    THE ART
                    <br />
                    OF <span>INK.</span>
                </h1>

                <p className="hero-description">
                    Precision. Detail. Identity.
                    <br />
                    Every tattoo tells a story.
                </p>

                <div className="hero-actions">
                    <button
                        className="hero-primary"
                        onClick={scrollToBooking}
                    >
                        <span>Book a Session</span>
                        <span className="arrow">↗</span>
                    </button>

                    <a
                        href="#gallery"
                        className="hero-secondary"
                    >
                        Explore the work
                    </a>
                </div>

            </div>

            {/* 3D Tattoo Machine */}
            <div className="tattoo-machine-stage">

            <div className="machine-glow" />

            <Canvas
                camera={{
                    position: [0, 0, 7],
                    fov: 45,
                }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.8} />

                <directionalLight
                    position={[4, 4, 5]}
                    intensity={2}
                />

                <pointLight
                    position={[-3, 2, 2]}
                    intensity={3}
                    color="#c6a15b"
                />

                <TattooMachine />
            </Canvas>

        </div>

            {/* Bottom information */}
            <div className="hero-bottom">

                <div className="hero-scroll">
                    <span className="scroll-line" />
                    SCROLL TO EXPLORE
                </div>

                <div className="hero-location">
                    LEBANON
                    <span>•</span>
                    WORLDWIDE
                </div>

            </div>

        </section>
    );
}