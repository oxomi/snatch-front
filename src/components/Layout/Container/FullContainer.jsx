import React from 'react';
import { Outlet } from 'react-router-dom';

const FullContainer = () => {
  return (
    <div className="flex justify-center w-full min-h-screen pt-14 sm:pt-header">
      <div className="w-full px-10 pb-5 max-w-container">
        <Outlet />
      </div>
    </div>
  );
};

export default FullContainer;
