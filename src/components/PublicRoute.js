import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        !token ? (
          <Component {...props} />
        ) : (
          <Redirect
            // to={{
            //   pathname: "/",
            //   state: { from: props.location }
            // }}
            to="/dashboard"
          />
        )
      }
    />
  );
};

export default PublicRoute;
