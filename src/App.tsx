import React, { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path={ADMIN.LOGIN} component={Login} />
          <PrivateRoute exact path={ADMIN.USER} component={User} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </Suspense>
  </HashRouter>
);

export default App;
