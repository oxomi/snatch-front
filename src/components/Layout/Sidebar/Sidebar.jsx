import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo_dark.svg';
import { Drawer, Box } from '@mui/material';

import { SNATCH_COLOR, SNATCH_WIDTH } from 'constants/snatchTheme';
import ChattingLog from 'components/SideNav/ChattingLog';

const Sidebar = () => {
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      className="flex h-[95%] w-sidebar"
      sx={{
        '& .MuiDrawer-paper': {
          display: 'flex',
          alignItems: 'center',
          paddingY: 6,
          gap: 5,
          width: SNATCH_WIDTH.sidebar,
          backgroundColor: 'white',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
          borderTopRightRadius: '30px',
          borderBottomRightRadius: '30px',
          boxSizing: 'border-box',
        },
      }}
    >
      <Link to="/">
        <Logo />
      </Link>
      <ChattingLog />
    </Drawer>
  );
};

export default Sidebar;
