import React, { ComponentType } from 'react';
import { RouteProps } from 'react-router-dom';

const HOC = (...components: ComponentType<RouteProps>[]) => (props: RouteProps) => (
  <>
    {components.map(Component => (
      <Component {...props} />
    ))}
  </>
);
export default HOC;
