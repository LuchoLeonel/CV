import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import GitHubOutlinedIcon from '@mui/icons-material/GitHub';
import LinkedInOutlinedIcon from '@mui/icons-material/LinkedIn';
import TwitterOulinedIcon from '@mui/icons-material/Twitter';


function NavBar() {
  const pageName = "Luciano Carreño";
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            {pageName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              <MyMenuItem page="About me" section="/#about-me" handle={() => handleCloseNavMenu()} />
              <MyMenuItem page="Experience" section="/#experience" handle={() => handleCloseNavMenu()} />
              <MyMenuItem page="Education" section="/#education" handle={() => handleCloseNavMenu()} />
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            {pageName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <MyMenuItem page="About me" section="/#about-me" handle={null} />
            <MyMenuItem page="Experience" section="/#experience" handle={null} />
            <MyMenuItem page="Education" section="/#education" handle={null} />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button
              startIcon={<GitHubOutlinedIcon />}
              href={"https://github.com/LuchoLeonel"}
              target="_blank"
            >
              Github
            </Button>
            <Button
              startIcon={<LinkedInOutlinedIcon />}
              href={"https://www.linkedin.com/in/lucianoleonelcarreno"}
              target="_blank"
            >
              Linkedin
            </Button>
            <Button
              startIcon={<TwitterOulinedIcon />}
              href={"https://twitter.com/lucho_leonel1"}
              target="_blank"
            >
              Twitter
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const MyMenuItem = ({page, section, handle}) => {
  return <Button
    key={page}
    href={section}
    onClick={handle}
    sx={{
      my: 1,
      fontSize: '16px',
      color: 'white',
      display: 'block'
    }}
  >
    {page}
  </Button>
}

export default NavBar;