import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Catalog from './Catalog';

export default function Home() {
  const { hash } = useLocation();

  // Handle smooth scrolling to sections when navigating from another page (like About)
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Catalog />
    </>
  );
}
