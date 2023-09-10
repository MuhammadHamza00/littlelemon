import React from 'react'
import flogo from "../Assets/footerlogo.png"
export default function Footer() {
  return (
    <footer>
        <img src={flogo} alt="This is Logo"/>
        <div className="area"id="doormat">
          <h1>Doormat Link</h1>
          <h2><a href='/'>Home</a></h2>
          <h2><a href='#about'>About</a></h2>
          <h2><a href='#special'>Menu</a></h2>
          <h2><a href='#res'>Reservation</a></h2>
          <h2><a href='#review'>Reviews</a></h2>
        </div>
        <div className="area"id="contact">
          <h1>Contact Us</h1>
          <h2>Email Us</h2>
        </div>
        <div className="area"id="social">
          <h1>Social Links</h1>
          <h2>TikTok</h2>
          <h2>Facebook</h2>
          <h2>Twitter</h2>
          <h2>Instagram</h2>
          <h2>Discord</h2>
        </div>
    </footer>
  )
}
