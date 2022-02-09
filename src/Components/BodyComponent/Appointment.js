import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@mui/material";

import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import axios from "axios";
import DoctorTimetable from "../BodyComponent/DoctorTimetable"
import DoctorDetalis from "../BodyComponent/DoctorDetalis";
import PatientDetalis from "./PatientDetalis";


export default function Appoiment() {
  const [time, setTime] = useState();

  const [doctor, setDoctor] = useState();
  const [selectDoctor, setSelectedDoctor] = useState();

  const [patient, setPatient] = useState();
  const [selectPatient, setSelectPatient] = useState();

  const [Schedule, setSchedule] = useState();
  const [selectSchedule,setSelectSchedule] = useState();

  const [price,setPrice] = useState();

const AppoimentsSubmits = () => {
  
   console.log(selectDoctor.label);
   console.log(selectPatient.label);
   console.log(selectSchedule.label);
   console.log(time);
   console.log(price.label);

  axios
    .post("http://localhost:8000/api/appoiments", {
      doctor_id: selectDoctor.label,
      patient_id: selectPatient.label,
      doctor_schedule_id: selectSchedule.label,
      appoiment_time: time,
    })
    .then(
      (response) => {
        console.log(response);
        alert("appoiments Add Success");
      },
      (error) => {
        console.log(error);
      }
    );

};
  useEffect(() => {
    // doctors
    axios
      .get(`http://localhost:8000/api/doctors`)
      .then((res) => {
        var temp = [];
        for (let i = 0; i < res.data.length; i++) {
          temp.push({ label: res.data[i].id + ""});
        }
        setDoctor(temp);
      })
      .catch((err) => {
        console.log(err);
      });

    // patients
    axios
      .get("http://localhost:8000/api/patients")
      .then((res) => {
        var temp = [];
        for (let i = 0; i < res.data.length; i++) {
          temp.push({ label: res.data[i].id + ""});
        }
        setPatient(temp);
      })
      .catch((err) => {
        console.log(err);
      });

      //schedule id
    axios
      .get("http://localhost:8000/api/schedules")
      .then((res) => {
        var temp = [];
        for (let i = 0; i < res.data.length; i++) {
        temp.push({ label: res.data[i].id + ""});
        }
        setSchedule(temp);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const top100Films = [
    { label: "3000"},
    { label: "5000"},
    
  ];
  return (
    <div className="App">
      <Grid>
        <Card
          style={{
            maxWidth: 1000,
            padding: "20px 5px",
            margin: "0 auto",
            marginTop: "15px",
          }}
        >
          <CardContent
            style={{
              marginTop: "25px",
            }}
          >
            <Typography gutterBottom variant="h5">
              Appointment
            </Typography>

            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={doctor}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setSelectedDoctor(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Doctor Id" />
                    )}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={patient}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setSelectPatient(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Patient Id" />
                    )}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Schedule}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setSelectSchedule(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Schedule Id" />
                    )}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <text>Appointment Time - : </text>
                  <TimePicker onChange={(time) => setTime(time)} />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setPrice(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Price" />
                    )}
                  />
                </Grid>

                <Grid item xs={2}>
                  <Button
                    color="primary"
                    onClick={() => AppoimentsSubmits()}
                    variant="contained"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <DoctorTimetable />
      <DoctorDetalis/>
      <PatientDetalis/>
    </div>
  );
}
