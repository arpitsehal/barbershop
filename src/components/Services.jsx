import React from 'react'

function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Services</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ width: '250px', padding: '20px', background: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3>Haircut</h3>
          <p>Modern and classic styles tailored to you.</p>
        </div>
        <div style={{ width: '250px', padding: '20px', background: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3>Beard Trim</h3>
          <p>Clean lines and perfect shapes every time.</p>
        </div>
        <div style={{ width: '250px', padding: '20px', background: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3>Shave</h3>
          <p>Hot towel shaves for a refreshing feel.</p>
        </div>
      </div>
    </section>
  )
}

export default Services
