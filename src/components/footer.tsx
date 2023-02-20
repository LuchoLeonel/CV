import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubOutlinedIcon from '@mui/icons-material/GitHub';
import LinkedInOutlinedIcon from '@mui/icons-material/LinkedIn';
import TwitterOulinedIcon from '@mui/icons-material/Twitter';


export default function SimpleBottomNavigation() {
  const handle = (url)  => {
    window.open(url)
  }

  return (
    <Box sx={{position: "sticky", bottom: 0, display: { xs: 'block', sm: 'none' }}}>
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction
          label="Github"
          icon={<GitHubOutlinedIcon />}
          onClick={() => handle("https://github.com/LuchoLeonel")}
        />
        <BottomNavigationAction
          label="Linkedin"
          icon={<LinkedInOutlinedIcon />}
          onClick={() => handle("https://www.linkedin.com/in/lucianoleonelcarreno")}
        />
        <BottomNavigationAction
          label="Twitter"
          icon={<TwitterOulinedIcon />}
          onClick={() => handle("https://twitter.com/lucho_leonel1")}
        />
      </BottomNavigation>
    </Box>
  );
}