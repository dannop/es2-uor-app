import React from "react";
import { PrivateRoute } from "../../util/routes-config";
import { withRouter } from "react-router-dom";

import HomePage from "./home";
import ProfilePage from "./profile";

const AuthRoutes = (
  <>
    <PrivateRoute exact path="/home" component={withRouter(HomePage)} />
    <PrivateRoute exact path="/recovery_password" component={withRouter(ProfilePage)} />
  </>
);

export default AuthRoutes;