import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


// import { PageContext } from '../../providers/PageProvider';


function Navbar() {
  console.log('navbar rendered')
 
  // const { page, togglePage } = useContext(PageContext);
  const menuItems = ['About', 'Contact', 'Projects']


  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' sx={{
      backgroundColor: '#16171a',
      height: '2em',
    }}>
      <Container maxWidth='100'>
        <Toolbar disableGutters sx={{
          width: '100%',
          paddingTop: '0',
          marginTop: '-0.3em'
        }}>
          <IconButton
            label='Page'
            size='small'
            // onClick={() => togglePage('Home')}
            sx={{
              display: 'flex',
              color: 'white',
              marginRight: 'auto',
            }}
          >
            <HomeOutlinedIcon
              sx={{
                height: { xs: '0.8em', md: '1.2em', lg: '1.6em' },
                width: { xs: '0.8em', md: '1.2em', lg: '1.6em' },
                marginBottom: { xs: '-.7em', sm: '-.4em', md: '.1em', lg: '-0.4em' },
              }}
            />
          </IconButton>
          <div className='menuDropdown'>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ marginBottom: '-.7em' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item}
                    // onClick={() => togglePage(item)}
                    label='Page'
                  >
                    <Typography
                      textAlign="center"
                      sx={{ color: '#16171A', }}
                    >
                      {item}
                      <Divider sx={{
                        color: 'white',
                        width: '80px',
                        marginLeft: '-10px',
                        marginRight: '-10px',
                        paddingTop: '10px',
                        marginBottom: '-5px',
                      }} />
                    </Typography>
                  </MenuItem>
                ))}

              </Menu>
            </Box>
          </div>

          <div className='menuItems'>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline-flex' } }}>
              {menuItems.map(item => (
                <Button
                  key={item}
                  // onClick={() => togglePage(item)}
                  label='Page'
                  sx={{
                    color: 'white',
                    fontSize: { xs: '13px', sm: '14px', md: '16px', lg: '18px' },
                    marginTop: '0.8em',
                    '&:hover': {
                      boxShadow: `1px 2px 7px 0px white`
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;