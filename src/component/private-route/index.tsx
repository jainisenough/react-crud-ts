import React, { useEffect, useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import PropTypes from 'prop-types';
import storage from '../../helper/storage';
import { ADMIN } from '../../route-link';
import Loading from '../loading';

const PrivateRoute = ({ component: Component, ...rest }: { component: React.ComponentType<RouteProps> }) => {
  const [token, setToken] = useState<unknown>(undefined);
  //const [loading, setLoading] = useState(true);
  useEffect(() => {
    storage
      .getItem('X-Access-Token')
      .then(setToken)
      .catch(() => {
        //setLoading(false);
      });
  }, []);
  return (
    <Route
      {...rest}
      render={props =>
        token === undefined ? <Loading /> : token ? <Component {...props} /> : <Redirect to={ADMIN.LOGIN} />
      }
    />
  );
};

PrivateRoute.defaultProps = {
  exact: false
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

export default PrivateRoute;
