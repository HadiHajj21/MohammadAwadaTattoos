import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'

import '../css/app.css';
import '../css/Navbar.css';

createRoot(document.getElementById('app')).render(<Home />)
