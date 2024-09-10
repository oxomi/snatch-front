import React from 'react';
import { useRoutes } from 'react-router-dom';
// import MainLayout from 'components/Layout/MainLayout';

const useMainRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
    },
    {
      path: '/Header',
      element: <Header />,
    },
  ]);
};

export default useMainRouter;
