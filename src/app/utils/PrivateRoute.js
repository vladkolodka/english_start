import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({isAuthorized, component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    isAuthorized ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        hash: 'login',
        state: {from: props.location}
      }}/>
    )
  )}/>
);

export default connect(({auth}) => ({isAuthorized: auth.isAuthorized}))(PrivateRoute);