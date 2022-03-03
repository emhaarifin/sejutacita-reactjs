import LayoutExplore from 'layouts/explore';
import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const PageHome = lazy(() => import('pages/Home'));
const PageDetailBook = lazy(() => import('pages/DetailBook'));
const Layout = lazy(() => import('layouts/default'));
const ErrorBoundary = lazy(() => import('pages/ErrorBoundary'));
const PageBookmark = lazy(() => import('pages/Bookmark'));
const PageExplore = lazy(() => import('pages/Explore'));

const BookuRoutes: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route element={<LayoutExplore />}>
                <Route index element={<PageHome />} />
                <Route path='explore/:category_id' element={<PageExplore />} />
              </Route>
              <Route path='bookmark' element={<PageBookmark />} />
              <Route path='book/:category_id/:id' element={<PageDetailBook />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Suspense>
  );
};

export default BookuRoutes;
