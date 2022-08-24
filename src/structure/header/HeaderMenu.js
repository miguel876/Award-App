import React from 'react'
import { routes } from '../../routes'
import { Stack  } from '@mui/material';
import CustomLink from '../../components/CustomLink';

export default function HeaderMenu() {
  return (
    <Stack sx={{ padding: 2}}>
      { routes.map(({path, title}, i) => title && (<CustomLink to={`/${path}`} key={path} style={{ marginBottom: 10}}>{ title }</CustomLink>))}    
    </Stack>
  )
}
