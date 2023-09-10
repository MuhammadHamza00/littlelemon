import React from 'react'
import Nav from "./Nav.js"
import logo from "../Assets/Logo .svg"

export default function Header() {
  return (
    <header>
        <img src={logo} alt="My Image" />
        <Nav/>
    </header>
  )
}
