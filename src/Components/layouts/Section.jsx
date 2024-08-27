import React from 'react'
import "./Section.css"
export default function Section({children, className}) {
  return (
    <section className={`section ${className}`}>{children}</section>
  )
}
