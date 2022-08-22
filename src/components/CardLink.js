import React from 'react'
import { Link } from "react-router-dom";

export default function CardLink({ children, ...rest }) {
  return (
    <Link {...rest} >{ children }</Link>
  )
}
