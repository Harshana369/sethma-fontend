import React, { useEffect, useState } from "react";
import { Box, Card, Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "../BodyStyles";
import { CardContent } from "@material-ui/core";
import Patient from "../Patient";
import Demo from "./ApoimentCalander";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ApoimentCalander from "./ApoimentCalander";

export default function Dashboard() {
  const classes = useStyles();

  const [doctorsCount, setDoctorsCount] = useState();
  const [patientsCount, setPatientsCount] = useState();
  const [appoimentsCount, setAppointmentsCount] = useState();

  const DisplayData = [
    {
      label: "Patients",
      value: "1",
    },
    {
      label: "Doctors",
      value: "2",
    },
    {
      label: "Total Appoiments",
      value: "4",
    },
  ];

  useEffect(() => {
    //get all doctors count
    axios.get("http://localhost:8000/api/doctorcount").then((response) => {
      setDoctorsCount(response.data);
    });

    //get all patients count
    axios.get("http://localhost:8000/api/patientscount").then((response) => {
      setPatientsCount(response.data);
    });

    //get today appoiments count
    axios.get("http://localhost:8000/api/toteleappoiments").then((response) => {
      setAppointmentsCount(response.data);
    });

    //console.log("hello", DisplayData[1].value);
  }, [DisplayData]);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Card
          style={{
            backgroundColor: "#c7ecee",
          }}
        >
          <CardContent className={classes.cardContent}>
            <Typography
              variant="body2"
              className={classes.cardLabel}
            >
              Patient
            </Typography>
            <Typography
              variant="h5"
              component="h6"
              className={classes.cardTitle}
            >
              {patientsCount}
            </Typography>
            <Typography component="p"></Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          style={{
            backgroundColor: "#f6e58d",
          }}
        >
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" className={classes.cardLabel}>
              Doctor
            </Typography>
            <Typography
              variant="h5"
              component="h6"
              className={classes.cardTitle}
            >
              {doctorsCount}
            </Typography>
            <Typography component="p"></Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          style={{
            backgroundColor: "#6ab04c",
          }}
        >
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" className={classes.cardLabel}>
              Appoiments
            </Typography>
            <Typography
              variant="h5"
              component="h6"
              className={classes.cardTitle}
            >
              {appoimentsCount}
            </Typography>
            <Typography component="p"></Typography>
          </CardContent>
        </Card>
      </Grid>
      <ApoimentCalander />
    </Grid>
  );
}
