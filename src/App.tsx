import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ADMIN } from './route-link';
import Loading from 'component/loading';
import PrivateRoute from 'component/private-route';
import ErrorBoundary from 'component/error-boundary';

const Header = lazy(() => import('component/admin/header'));
const Footer = lazy(() => import('component/admin/footer'));
const Login = lazy(() => import('component/admin/login'));
const User = lazy(() => import('component/admin/user'));

const App = () => (
  <HashRouter>
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <Header title="Admin App" />
        <Routes>
          <Route path={ADMIN.LOGIN} element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path={ADMIN.USER} element={<User />} />
          </Route>
        </Routes>
        <Footer />
      </ErrorBoundary>
    </Suspense>
  </HashRouter>
);

export default App;
