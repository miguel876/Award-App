import React, { Component } from 'react'
import { Container, Grid, IconButton, Drawer } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HeaderMenu from './HeaderMenu';
import HeaderProfile from './HeaderProfile';
import logo from '../../assets/images/logo.png'
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const StyledLogo = styled("img")({
  height: 120
})

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentDidMount() {
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  };

  handleDrawerClose = () => {
    this.setState({ open: false })
  };

  render() {
    return (
      <header>
        <Container>
          <Grid container spacing={2} alignItems="center" direction="row" sx={{ height: 120, pb: 20 }}>
            <Grid item xs={8}>
              <Link to="/">
              <StyledLogo src={logo} alt="Award App Logo" />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <HeaderProfile drawerHandler={this.handleDrawerOpen} />
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
              background: 'linear-gradient(180deg, rgba(247,186,174,1) 0%, rgba(156,199,231,1) 93%, rgba(242,199,242,1) 100%)',
            },
          }}
          variant="persistent"
          anchor="right"
          open={this.state.open}
        >
          <IconButton onClick={this.handleDrawerClose} disableRipple sx={{ justifyContent: 'flex-start'}}>
              <ChevronRightIcon />
          </IconButton>
          <HeaderMenu />
        </Drawer>
    </header>
    )
  }
}
