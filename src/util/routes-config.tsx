import React from "react";
import { Route, Redirect } from "react-router-dom";
import { StorageService } from "../services";

export const TOKEN_KEY = "@base/token";

export const PublicRoute = ({ component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      StorageService.isAuthenticated() ? (
        <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
      ) : (
        React.createElement(component, props)
      )
    }
  />
);

export const PrivateRoute = ({ component, ...rest }: any) => (
    <Route
      {...rest}
      render={(props: any) =>
        StorageService.isAuthenticated() ? (
          React.createElement(component, props)
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  
);