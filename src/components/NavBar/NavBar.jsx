import * as React from 'react';
import './NavBar.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from "../CartWidget/CartWidget"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 250,
      sm: 500,
      md: 700,
      lg: 1000,
      xl: 1250,
    },
  },
});

const drawerWidth = 240;
const navItems = ['Alarges', 'Adaptadores', 'Zapatillas', 'Estabilizadores', 'UPS' ];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Teccomerce
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: '#173c5b' }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              className='colorTexto'
              sx={{ flexGrow: 1, textAlign: 'left', display: { xs: 'block', sm: 'block' } }}
            >
              Teccomerce
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} className='colorTexto'>
                  {item}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              className='colorTexto'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <CartWidget className = "logo colorTexto"/>
          </Toolbar>
        </AppBar>
        <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}

export default NavBar;