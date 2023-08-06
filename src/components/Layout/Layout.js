import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LeftBar from '../LeftBar/LeftBar';
import { useAuth } from '../../hooks/useAuth';

// import "./Layout.scss";

const Layout = () => {
  const auth = useAuth();

  return auth ? (
    <div className='w-screen h-screen overflow-auto flex justify-between'>
      <LeftBar />
      <Outlet />
    </div>
  ) : (
    <Navigate to='login' />
  );
};

export default Layout;
