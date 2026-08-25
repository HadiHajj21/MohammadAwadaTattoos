import { useState } from 'react';
import '../../css/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('light-mode');
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-island">

                {/* Logo placeholder */}
                <a href="/" className="navbar-logo" aria-label="Mohammad Awada Tattoos">
                    <span className="logo-placeholder">
                        MA
                    </span>
                </a>

                {/* Desktop navigation */}
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#location" onClick={closeMenu}>
                            Location
                        </a>
                    </li>

                    <li>
                        <a href="#gallery" onClick={closeMenu}>
                            Gallery
                        </a>
                    </li>
                </ul>

                {/* Dark mode */}
                <button
                    className="dark-mode-toggle"
                    onClick={toggleDarkMode}
                    aria-label="Toggle dark mode"
                >
                    <span className="mode-icon">
                        {darkMode ? '☾' : '☀'}
                    </span>
                </button>

                {/* Mobile menu */}
                <button
                    className={`hamburger ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>

            </div>
        </nav>
    );
};

export default Navbar;