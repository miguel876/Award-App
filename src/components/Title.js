import { Typography } from '@mui/material'
import React from 'react'

export default function Title({ children, sx }) {
  return (
    <Typography variant="h4" sx={{ mt:2, mb: 2, ...sx}}>{ children }</Typography>
  )
}
