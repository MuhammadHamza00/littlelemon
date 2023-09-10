import React from 'react'


export default function Nav() {

  return (
    <>
      <nav className="navbar" id="navid">
        <ul className='list'>
          <li className='items'><a href='/'>Home</a></li>
          <li className='items'><a href='#about'>About</a></li>
          <li className='items'><a href='#special'>Menu</a></li>
          <li className='items'><a href='#res'>Reservation</a></li>
          <li className='items'><a href='#review'>Reviews</a></li>
        </ul>
      </nav>
    </>
  )
}
