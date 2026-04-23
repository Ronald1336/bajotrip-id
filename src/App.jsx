import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-slate-800 bg-slate-50 min-h-screen relative">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Simple Footer */}
        <footer className="bg-ocean-deep text-slate-300 py-12 text-center mt-auto">
          <p className="text-sm">© {new Date().getFullYear()} Open Trip Labuan Bajo. All Rights Reserved.</p>
        </footer>

        <FloatingWhatsApp />
      </div>
    </Router>
  )
}

export default App
