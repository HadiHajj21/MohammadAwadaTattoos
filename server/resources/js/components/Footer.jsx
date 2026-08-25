import '../../css/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                <div className="footer-brand">

                    <div className="footer-logo">
                        MA
                    </div>

                    <h2>
                        Leave your
                        <br />
                        <em>mark.</em>
                    </h2>

                    <p>
                        Custom tattoo work created with
                        precision, intention and character.
                    </p>

                </div>


                <div className="footer-links">

                    <div className="footer-column">
                        <span>EXPLORE</span>

                        <a href="#about">About</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#booking-section">Book a Session</a>
                        <a href="#location">Location</a>
                    </div>


                    <div className="footer-column">
                        <span>STUDIO</span>

                        <p>Lebanon</p>
                        <p>By appointment only</p>
                    </div>


                    <div className="footer-column">
                        <span>FOLLOW</span>

                        <a
                            href="https://www.instagram.com/mohamad.awada.tattoos/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram ↗
                        </a>

                        <a
                            href="https://www.facebook.com/profile.php?id=61573878011221"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook ↗
                        </a>
                    </div>

                </div>

            </div>


            <div className="footer-bottom">

                <span>
                    © {new Date().getFullYear()} Mohammad Awada Tattoos
                </span>

                <span>
                    MADE WITH INTENTION
                </span>

            </div>

        </footer>
    );
}