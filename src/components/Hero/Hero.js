import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
// import { StaticImage } from "gatsby-plugin-image"
import { GitHub } from "react-feather"

import {
  heroContainer,
  githubIcon,
  heroText,
  typewriter,
  handWaving,
} from "./Hero.module.scss"

const Hero = () => {
  const { backgroundImage } = useStaticQuery(graphql`
    query HeroImage {
      backgroundImage: file(relativePath: { eq: "coding_desk.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 2000, placeholder: BLURRED, formats: AUTO)
        }
      }
    }
  `)
  const heroImage = getImage(backgroundImage)

  return (
    <BgImage image={heroImage} className={heroContainer}>
      <a
        href="https://github.com/apo1798/"
        target="_blank"
        rel="noopener noreferrer"
        className={githubIcon}
      >
        <GitHub size={36} />
      </a>
      <div className={heroText}>
        <h1>
          Hello World! This is PH Chen.<span className={handWaving}>👋</span>
        </h1>
        <h1 className={typewriter}>I build things on web.</h1>
      </div>
    </BgImage>
  )
}

export default Hero
