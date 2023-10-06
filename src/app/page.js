'use client'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { AnimatePresence, useScroll, useTransform, motion } from 'framer-motion'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Cursor from '../components/Cursor'
import Clients from '../components/Clients'
import PreFooter from '../components/PreFooter'
import Footer from '../components/Footer'
import { useRef } from 'react'

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const bg = useTransform(scrollYProgress, [0, 1], ['#ffff', '#f7ede3'])


  return (
    <AnimatePresence>
      <motion.main key='main' style={{ backgroundColor: bg }} ref={ref}>
        <Cursor key='cursor' />
        <Nav key='nav' />
        <Hero key='hero' />
        <Clients rotate={rotate} key='clients' />
        <PreFooter key='prefooter' />
        <Footer key='footer' />
      </motion.main>
    </AnimatePresence>
  )
}
