import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from 'components/Layout/MainLayout';
import FullContainer from 'components/Layout/Container/FullContainer';
import ChatPage from 'pages/Chat/ChatPage';
import DbPage from 'pages/DB/DbPage';
import MonitorPage from 'pages/Monitor/MonitorPage';
import Login from 'pages/Init/Login';
import Signup from 'pages/Init/Signup';
import ExPage from 'pages/Chat/Examples/ExPage';

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
            { path: 'database/', element: <DbPage /> },
            { path: 'database/:category', element: <DbPage /> },
            { path: 'monitor', element: <MonitorPage /> },
            { path: 'chatpage/:chatId', element: <ExPage /> },
            { path: 'chatpage/11', element: <ChatPage /> },
          ],
        },
      ],
    },
    { path: 'login', element: <Login /> },
    { path: 'signup', element: <Signup /> },
  ]);
};

export default useMainRouter;
