import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import storage from 'helper/storage';
import { ADMIN } from 'route-link';
import Loading from 'component/loading';

const PrivateRoute = () => {
  const [token, setToken] = useState<unknown>(undefined);
  useEffect(() => {
    (async () => {
      try {
        const getToken = await storage.getItem('X-Access-Token');
        setToken(getToken);
      } catch (e) {
        console.log(e);
        setToken(null);
      }
    })();
  }, []);
  return token === undefined ? <Loading /> : token ? <Outlet /> : <Navigate to={ADMIN.LOGIN} />;
};

export default PrivateRoute;
