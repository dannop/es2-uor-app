import { PrivateRoute } from "../../util/routes-config";
import { withRouter } from "react-router-dom";

import HomePage from "./home";
import InGamePage from "./in-game";

const AuthRoutes = (
  <>
    <PrivateRoute exact path="/" component={withRouter(HomePage)} />
    <PrivateRoute exact path="/in-game" component={withRouter(InGamePage)} />
  </>
);

export default AuthRoutes;