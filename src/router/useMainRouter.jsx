import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from 'components/Layout/MainLayout';
import FullContainer from 'components/Layout/Container/FullContainer';
import ChatPage from 'pages/Chat/ChatPage';
import DbPage from 'pages/DB/DbPage'

const useMainRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <FullContainer />,
          children: [{ index: true, element: <ChatPage /> },{path: 'database', element: <DbPage />}],
        },
      ],
    },
  ]);
};

export default useMainRouter;
