import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import BusinessDashboard from "./BusinessDashboard";
import VolunteerDashboardAll from "./VolunteerDashboardAll";
import VolunteerDashboardPersonal from "./VolunteerDashboardPersonal";

import CreateRequestForm from "./CreateRequestForm";
import ViewRequestDetails from "./ViewRequestDetails";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <PrivateRoute path="/requestDetails" component={ViewRequestDetails} />
        <PrivateRoute path="/createRequest" component={CreateRequestForm} />
        <PrivateRoute path="/businessDashboard" component={BusinessDashboard} />
        <PrivateRoute
          path="/volunteerDashboardAll"
          component={VolunteerDashboardAll}
        />
        <PrivateRoute
          path="/volunteerDashboardPersonal"
          component={VolunteerDashboardPersonal}
        />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
