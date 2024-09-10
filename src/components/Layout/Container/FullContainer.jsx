import React from 'react';
import { Outlet } from 'react-router-dom';

const FullContainer = () => {
  return (
    <div className="flex justify-center w-full min-h-screen min-h-scree pt-14 sm:pt-header">
      <div className="w-full p-5 max-container">
        <Outlet />
      </div>
    </div>
  );
};

export default FullContainer;
