import { styled, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import React from 'react'

export const StyledLink = styled(Link)(props => ({
    color: props.theme.palette.secondary.contrastText,
    textDecoration: 'none',
    transition: 'all 0.5s',
    '&:hover': {
        color: props.theme.palette.secondary.light
    }
  }))

export default function CustomLink({ children, ...rest }) {
  return (
    <StyledLink {...rest}><Typography variant="subtitle1">{ children }</Typography></StyledLink>
  )
}
