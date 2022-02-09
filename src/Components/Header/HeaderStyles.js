import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({


  //wrapper of main contianer
  wrapper: {
    minHeight: "110vh",
    height: "auto",
    background: "#efefef",
    marginTop: "50px",
    padding: theme.spacing(0, 0 , 0, 24),
  },

  //Side nav
  drawerPaper: {
    width: "192px",
    marginTop: "65px",
  },

}));
