import { PrivateRoute } from "../../util/routes-config";
import { withRouter } from "react-router-dom";

import HomePage from "./home";
import InGamePage from "./in-game";
import ProfilePage from "./profile";

const AuthRoutes = (
  <>
    <PrivateRoute exact path="/home" component={withRouter(HomePage)} />
    <PrivateRoute exact path="/in-game" component={withRouter(InGamePage)} />
    <PrivateRoute exact path="/profile" component={withRouter(ProfilePage)} />
  </>
);

export default AuthRoutes;