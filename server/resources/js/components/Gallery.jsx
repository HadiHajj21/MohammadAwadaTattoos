import { useEffect, useState } from 'react';
import '../../css/app.css';

const R2_PUBLIC_URL =
    'https://pub-d752ec4acc1b4cd8ab4972feccc02b93.r2.dev';

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        fetch('/api/gallery')
            .then((res) => res.json())
            .then((data) => setImages(data))
            .catch(console.error);
    }, []);

    return (
        <section id="gallery" className="gallery-section">

            {/* Section heading */}
            <div className="gallery-heading">

                <div className="gallery-eyebrow">
                    THE CRAFT
                </div>

                <h2>
                    Recent <span>Work.</span>
                </h2>

                <p>
                    A selection of work, built with precision,
                    patience and purpose.
                </p>

            </div>

            {/* Masonry gallery */}
            <div className="gallery-grid">

                {images.map((img, index) => (
                    <button
                        key={img.id ?? index}
                        className="gallery-item"
                        onClick={() =>
                            setActiveImage(
                                `${R2_PUBLIC_URL}/${img.image}`
                            )
                        }
                    >
                        <img
                            src={`${R2_PUBLIC_URL}/${img.image}`}
                            alt={`Mohammad Awada tattoo work ${index + 1}`}
                            loading={index < 4 ? 'eager' : 'lazy'}
                        />

                        <div className="gallery-overlay">
                            <span>VIEW</span>
                            <span className="gallery-arrow">↗</span>
                        </div>
                    </button>
                ))}

            </div>

            {/* Fullscreen image viewer */}
            {activeImage && (
                <div
                    className="gallery-lightbox"
                    onClick={() => setActiveImage(null)}
                >
                    <button
                        className="gallery-close"
                        onClick={() => setActiveImage(null)}
                        aria-label="Close image"
                    >
                        ×
                    </button>

                    <img
                        src={activeImage}
                        alt="Tattoo artwork"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

        </section>
    );
}