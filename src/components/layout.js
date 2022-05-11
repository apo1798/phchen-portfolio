import * as React from "react"

import Header from "./Header/Header"
import "./variables.module.scss"
import { bodyContainer, contentContainer } from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <section className={bodyContainer}>
      <Header />

      <main className={contentContainer}>{children}</main>
      <footer>
        © {new Date().getFullYear()} &middot; Built with
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </section>
  )
}

export default Layout
