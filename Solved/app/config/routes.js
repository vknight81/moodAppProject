import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import signOut from "../components/SignOut";
import register from "../components/Register";
import myDiary from "../components/myDiary"


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="myDiary" component={myDiary} />
    <Route path="favorites" component={Favorites} />
    <Route path="signOut" component={signOut} />
    <Route path="register" component={register} />
    <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
