import React from 'react';
import { Outlet } from 'react-router-dom';

const FullContainer = () => {
  return (
    <div className="flex justify-center w-full min-h-screen sm:pt-6">
      <div className="w-full px-2 mb-20 max-w-container 2xl:px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default FullContainer;
