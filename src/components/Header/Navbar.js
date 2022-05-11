import React from "react"

import NavItems from "./NavItems"

import { navbar } from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={navbar}>
      <NavItems />
    </nav>
  )
}

export default Navbar
