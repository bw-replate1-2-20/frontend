import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import BusinessDashboard from "./BusinessDashboard";
import VolunteerDashboard from "./VolunteerDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <PrivateRoute path="/businessDashboard" component={BusinessDashboard} />
        <PrivateRoute
          path="/volunteerDashboard"
          component={VolunteerDashboard}
        />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
