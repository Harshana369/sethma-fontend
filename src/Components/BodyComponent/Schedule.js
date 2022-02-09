import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import axios from "axios";
import moment from "moment";
export default function Schedule() {
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [doctor, setDoctor] = useState();

  const [selectedDoctor, setSelectDoctor] = useState();
  const [ConsultationTime, setConsultationTime] = useState(0);

  const time = [{ label: "30" }, { label: "45" }];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/doctors`)
      .then((res) => {
        var temp = [];
        console.log(res.data[0].id + "");
        for (let i = 0; i < res.data.length; i++) {
          temp.push({ label: res.data[i].id + "" });
        }
        setDoctor(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ScheduleSubmits = () => {
    console.log(moment(startDate).format("MM.DD.YYYY"));
    console.log(startTime);
    console.log(endTime);
    console.log(selectedDoctor.label);
    console.log(ConsultationTime.label);

    axios
      .post("http://localhost:8000/api/schedules", {
        doctor_id: selectedDoctor.label,
        doctor_schedule_date: moment(startDate).format("MM.DD.YYYY"),
        doctor_schedule_start: startTime,
        doctor_schedule_end: endTime,
        average_consultation_time: ConsultationTime.label,
      })
      .then(
        (response) => {
          console.log(response);
          alert("Schedule Add Success");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="App">
      <Grid>
        <Card
          style={{
            maxWidth: 1000,
            padding: "20px 5px",
            margin: "0 auto",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              Schedule Us
            </Typography>

            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={doctor}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setSelectDoctor(value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Doctor Id" />
                    )}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <h5>Schedule Date</h5>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <h5>Schedule Start Time - : </h5>
                  <TimePicker
                    selected={startTime}
                    onChange={(time) => setStartTime(time)}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <h5>Schedule End Time - : </h5>
                  <TimePicker
                    selected={endTime}
                    onChange={(time) => setEndTime(time)}
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <Autocomplete
                    disablePortal
                    id="id"
                    options={time}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setConsultationTime(value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label=" Average Consultation Time"
                      />
                    )}
                  />
                </Grid>

                <Grid
                  item
                  xs={2}
                  style={{
                    marginTop: "50px",
                  }}
                >
                  <Button
                    color="primary"
                    onClick={() => ScheduleSubmits()}
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
    </div>
  );
}
