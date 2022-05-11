import React from "react"

import { Check } from "react-feather"
import { alignIcon } from "./AboutTech.module.scss"

const techStack = ["JavaScript ES6+", "React", " GatsbyJS"]

const AboutTech = () => {
  return (
    <ul>
      {techStack.map(tech => (
        <li key={tech} className={alignIcon}>
          <Check /> {tech}
        </li>
      ))}
    </ul>
  )
}

export default AboutTech
