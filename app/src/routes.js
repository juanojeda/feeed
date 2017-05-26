import React from 'react';
import { Router, Route } from 'react-router';
import RoutesConfig from './routesConfig';

const Routes = (props) => (
  <Router {...props}>
    {
      RoutesConfig.map(route => {
        return (
          <Route key={route} path={route.path} component={route.component} />
        )
      })
    }
  </Router>
);

export default Routes;
