import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo_dark.svg';
import { Drawer, Box } from '@mui/material';

import { SNATCH_COLOR, SNATCH_WIDTH } from 'constants/snatchTheme';
import ChattingLog from 'components/SideNav/ChattingLog';
import InfoCategory from 'components/SideNav/InfoCategory';

import oceanImg from 'assets/ocean_poster.jpg';

const Sidebar = () => {
  const location = useLocation();
  const renderList = () => {
    const matchChatIdPath = matchPath('/chatpage/:chatId', location.pathname);
    const matchDbPath = matchPath('/database/:category', location.pathname);
    if (location.pathname === '/' || matchChatIdPath) {
      return <ChattingLog />;
    } else if (location.pathname === '/database' || matchDbPath) {
      return <InfoCategory />;
    } else {
      return <img src={oceanImg} style={{ width: '80%', marginTop: 70 }} />;
    }
  };

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
      {renderList()}
    </Drawer>
  );
};

export default Sidebar;
