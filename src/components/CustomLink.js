import { styled } from '@mui/material'
import { Link } from "react-router-dom";
import React from 'react'

export const StyledLink = styled(Link)(props => ({
    color: props.button ? props.theme.palette.primary.contrastText : props.theme.palette.accent.contrastText,
    textDecoration: 'none',
    transition: 'all 0.5s',
  }))

export default function CustomLink({ children, ...rest }) {
  return (
    <StyledLink {...rest}>{ children }</StyledLink>
  )
}
