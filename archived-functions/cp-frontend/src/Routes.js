import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./scenes/return-form/index";
import NotFound from "./scenes/404/index";
import AppliedRoute from "./components/AppliedRoutes";
import InitializeFromStateForm from "./scenes/redux-form/InitializeFromStateForm"


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={InitializeFromStateForm} props={childProps} />
    <Route component={NotFound} />
  </Switch>;