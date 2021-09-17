import { PublicRoute } from "../../util/routes-config";
import { withRouter } from "react-router-dom";

import LandingPage from "./landing";
import SignInPage from "./sign-in";
import SignUpPage from "./sign-up";

const AuthRoutes = (
  <>
    <PublicRoute exact path="/" component={withRouter(LandingPage)} />
    <PublicRoute exact path="/sign-in" component={withRouter(SignInPage)} />
    <PublicRoute exact path="/sign-up" component={withRouter(SignUpPage)} />
  </>
);

export default AuthRoutes;