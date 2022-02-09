import React from "react";
import { Drawer, Hidden } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import SidenavData from "./SidenavData";

export default function Sidenav({
  handleDrawerClose,
}) {
  const classes = useStyles();

  return (
    <nav className={classes.drawer} >
      <Hidden>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          open>
          <SidenavData handleDrawerClose={handleDrawerClose} />
        </Drawer>
      </Hidden>
    </nav>
  );
}
