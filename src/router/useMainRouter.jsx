import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from 'components/Layout/MainLayout';
import FullContainer from 'components/Layout/Container/FullContainer';
import ChatPage from 'pages/Chat/ChatPage';
import DbPage from 'pages/DB/DbPage';
import MonitorPage from 'pages/Monitor/MonitorPage';

const useMainRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <FullContainer />,
          children: [
            { index: true, element: <ChatPage /> },
            { path: 'database', element: <DbPage /> },
            { path: 'monitor', element: <MonitorPage /> },
          ],
        },
      ],
    },
  ]);
};

export default useMainRouter;
