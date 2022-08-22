import React, { useRef, useState } from 'react'
import { Avatar, ClickAwayListener, IconButton, Menu, MenuItem, MenuList, Popper, Stack, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { authorName } from '../properties'

function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

export default function HeaderProfile({ drawerHandler }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
        <Typography>{authorName}</Typography>
        
        <Stack>
        <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
        <Avatar {...stringAvatar(authorName)} sx={{ width: 40, height: 40, fontSize: 14, cursor: 'pointer'}} />
        </IconButton>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          Perfil
        </MenuItem>
        <MenuItem>

          Configurações
        </MenuItem>
        <MenuItem>
          Logout
        </MenuItem>
      </Menu>
        </Stack>

        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={drawerHandler}
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        
    </Stack>
  )
}
