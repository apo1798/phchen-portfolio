import React from "react"
import { Link } from "gatsby"

const NavItems = () => {
  return (
    <ul>
      <li>
        <Link to="#home">Home</Link>
      </li>
      <li>
        <Link to="#about">About</Link>
      </li>
      <li>
        <Link to="#works">Works</Link>
      </li>
      <li>
        <Link to="#home">Contact</Link>
      </li>
    </ul>
  )
}

export default NavItems
