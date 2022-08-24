import { Container } from '@mui/material';
import React from 'react'
import { useRoutes, useLocation } from 'react-router-dom';
import { routes } from '../routes';

export default function Main() {
  const location = useLocation()
  const route = useRoutes(routes, location)

  return (
    <main>
      <Container sx={{ height: '100%'}}>
        {route}
      </Container>
        
    </main>
  )
}
