import '../../css/MapSection.css';

export default function MapSection() {
    return (
        <section id="location" className="location-section">

            <div className="location-header">

                <div className="location-eyebrow">
                    <span />
                    FIND THE STUDIO
                    <span />
                </div>

                <h2>
                    The <em>Studio.</em>
                </h2>

                <p>
                    A space dedicated to the craft, the process,
                    and the art of tattooing.
                </p>

            </div>


            <div className="location-layout">

                {/* MAP */}

                <div className="location-map">

                    <iframe
                        title="Mohammad Awada Tattoos Studio Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.9093880786261!2d35.4837243695691!3d33.89898731147286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1982b81a620d%3A0x5d8959d33a8fa03f!2smotattooss!5e0!3m2!1sen!2slb!4v1769982480585!5m2!1sen!2slb"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />

                    <div className="map-overlay">
                        <span>MOHAMMAD AWADA TATTOOS</span>
                    </div>

                </div>


                {/* INFORMATION */}

                <div className="location-info">

                    <div className="location-number">
                        01
                    </div>

                    <h3>
                        Come
                        <br />
                        <em>create.</em>
                    </h3>

                    <div className="location-divider" />

                    <div className="location-detail">

                        <span>LOCATION</span>

                        <p>
                            Lebanon
                        </p>

                    </div>

                    <div className="location-detail">

                        <span>STUDIO</span>

                        <p>
                            Mohammad Awada Tattoos
                        </p>

                    </div>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=35.4837243695691,33.89898731147286"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-directions"
                    >
                        <span>GET DIRECTIONS</span>
                        <strong>↗</strong>
                    </a>

                </div>

            </div>

        </section>
    );
}