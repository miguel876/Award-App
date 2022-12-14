import { Stack } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import Header from './header/Header'
import Main from './Main'

export const StyledLayout= styled(Stack)(props => ({
  backgroundColor: props.theme.palette.accent.light,
  height: '100%'
}))

export default function Layout() {
  return (
    <StyledLayout>
      <Header />
      <Main />
    </StyledLayout>
  )
}
