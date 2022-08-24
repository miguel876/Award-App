import { Card as C, CardContent, CardActions, Typography } from '@mui/material'
import React from 'react'
import CardLink from './CardLink'

export default function Card({ children, to, large, ...rest }) {
  return (
    <C sx={{ minWidth: 275, p: 1, height: large ? 500 : 240, mb: large && 10, position: 'relative', ...rest }} elevation={5}>
      <CardContent>
        { children }
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", position: 'absolute', bottom: 10, right: 10}}>
        <CardLink to={to} button><Typography variant="subtitle1">Mais Detalhes</Typography></CardLink>
      </CardActions>
    </C>
  )
}
