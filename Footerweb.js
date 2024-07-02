import React from 'react'

function Footerweb() {
  return (
    <div>
      <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Pages</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#booking">Booking</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Social Links</h3>
                    <ul>
                        <li><a href="#whatsapp">WhatsApp</a></li>
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                        <li><a href="#youtube">YouTube</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Phone: 8857031926</p>
                    <p>Address: Shop no 8, The Avenue, Near Zudio, College Road, Nashik</p>
                    <p>Email: visualvibesstudio@gmail.com</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footerweb
