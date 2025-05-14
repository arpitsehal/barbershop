import React from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero.jpg'

function Hero() {
  return (
    <section
      style={{
        background: `url(${heroImg}) center/cover`,
        height: '90vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: 'center',
          background: 'rgba(0,0,0,0.5)',
          padding: '20px 40px',
          borderRadius: '8px',
        }}
      >
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Welcome to PMC Barber</h1>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>Classic Cuts. Modern Style.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
