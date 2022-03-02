import React, { Fragment, lazy } from 'react';

import { Outlet } from 'react-router-dom';
const Navbar = lazy(() => import('./navbar'));

const Default: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <main className='layout--page-content'>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Default;
