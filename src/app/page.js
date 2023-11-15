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
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useScroll, useTransform } from 'framer-motion';
import Vision from '@/components/Vision/Vision';

export default function Home() {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-700px', '0px'])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main ref={ref}>
      <Title />
      <Hero />
      <Projects />
      <Client />
      <News />
      <Vision y={y} />
      <About />
      <Footer y={y} />
    </main>
  );
}
