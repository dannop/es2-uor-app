import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const TOKEN_KEY = "@base/token";
export const MENU_OPTIONS = "@base/menu-options";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const isAuthorized = (routeName: string) => {
  if (routeName === '/') return true;

  else {
    const menu_options: string = localStorage.getItem(MENU_OPTIONS) || '';
    var autorized: any;
    
    JSON.parse(menu_options).map((options: any) => {
      let route = options.ListaDePermissaoUsuarioItem.filter((item: any) => item.Label === routeName.split('/')[1]);
      if (route.length > 0) autorized = route;
    });

    if (!autorized[0].Autorizado) toast.error('Não autorizado', {autoClose: false, toastId: 'toastAuthorizationError'});
    return autorized[0].Autorizado;
  }
};  

export const PublicRoute = ({ component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
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
        isAuthenticated() ? (
          isAuthorized(props.location.pathname) ? (
            React.createElement(component, props)
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  
);