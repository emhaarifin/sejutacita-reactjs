import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Start = lazy(() => import('pages/Start'));
const BookuRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/start' element={<Start />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BookuRoutes;
