import { Card as C, CardContent, CardActions } from '@mui/material'
import React from 'react'
import CardLink from './CardLink'

export default function Card({ children, to }) {
  return (
    <C sx={{ minWidth: 275 }}>
      <CardContent>
        { children }
      </CardContent>
      <CardActions>
        <CardLink to={to}>Mais Detalhes</CardLink>
      </CardActions>
    </C>
  )
}
