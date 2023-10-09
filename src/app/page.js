'use client'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Projects from '../components/Projects';
import Client from '../components/Client';
import News from '../components/News';
import About from '../components/About';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Title />
      <Hero />
      <Projects />
      <Client />
      <News />
      <About />
      <Footer />
    </main>
  );
}
