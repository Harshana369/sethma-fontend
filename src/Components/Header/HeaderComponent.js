import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Patient from "../BodyComponent/Patient"
import Logout from "../BodyComponent/Logout";
import Appointment from "../BodyComponent/Appointment";

import { useStyles } from "./HeaderStyles";
import Doctor from "../BodyComponent/Doctor";
import Schedule from "../BodyComponent/Schedule";

export default function HeaderComponent() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* // registerian our routes  */}
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path="/logout" render={() => <Logout />} />
          <Route exact path="/patient" render={() => <Patient />} />
          <Route exact path="/doctor" render={() => <Doctor />} />
          <Route exact path="/schedule" render={() => <Schedule />} />
          <Route exact path="/appointment" render={() => <Appointment />} />
          <Route exact path="/" render={() => <Dashboard />} />
        </Switch>
      </Box>
    </div>
  );
}
