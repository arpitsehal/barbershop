import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
      <form style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
