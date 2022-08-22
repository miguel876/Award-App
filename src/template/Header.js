import { Container, Grid, Typography, IconButton, Drawer } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react'
import HeaderMenu from './HeaderMenu';
import HeaderProfile from './HeaderProfile';

const drawerWidth = 240;

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header>
        <Container>
          <Grid container spacing={2} alignItems="center" direction="row" sx={{ height: 80 }}>
            <Grid item xs={8}>
              <Typography>Logo</Typography>
            </Grid>
            <Grid item xs={4}>
              <HeaderProfile drawerHandler={handleDrawerOpen} />
            </Grid>
          </Grid>
        </Container>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <IconButton onClick={handleDrawerClose} sx={{ justifyContent: 'flex-start'}}>
              <ChevronRightIcon />
          </IconButton>
          <HeaderMenu />
        </Drawer>
    </header>
  )
}
