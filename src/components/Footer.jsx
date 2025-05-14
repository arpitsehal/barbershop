import React from 'react'

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px' }}>
      &copy; {new Date().getFullYear()} PMC Barber. All rights reserved.
    </footer>
  )
}

export default Footer
