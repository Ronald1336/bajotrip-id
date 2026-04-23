import React from 'react'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import GlobalInfoSection from './components/GlobalInfoSection'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen relative">
      <Hero />
      <Catalog />
      <GlobalInfoSection />

      {/* Simple Footer */}
      <footer className="bg-ocean-deep text-slate-300 py-12 text-center mt-12">
        <p className="text-sm">© {new Date().getFullYear()} Open Trip Labuan Bajo. All Rights Reserved.</p>
      </footer>

      <FloatingWhatsApp />
    </div>
  )
}

export default App
