import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const Layout = lazy(() => import('layouts/default'));
const LayoutExplore = lazy(() => import('layouts/explore'));
const ErrorBoundary = lazy(() => import('pages/ErrorBoundary'));
const PageHome = lazy(() => import('pages/Home'));
const PageExplore = lazy(() => import('pages/Explore'));
const PageDetailBook = lazy(() => import('pages/DetailBook'));
const PageBookmark = lazy(() => import('pages/Bookmark'));
const PageNotFound = lazy(() => import('pages/NotFound'));

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
              <Route path='*' element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Suspense>
  );
};

export default BookuRoutes;
