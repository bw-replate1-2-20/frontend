import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/businessDashboard">
          {/* BUSINESS DASHBOARD */}
        </PrivateRoute>
        <PrivateRoute path="/volunteerDashboard">
          {/* VOLUNTEER DASHBOARD */}
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
