import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import { appointments } from "../../month-appointments";


export default class ApoimentCalander extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="mt-4">
        <Paper>
          <Scheduler data={data} height={760}>
            <ViewState
              defaultCurrentDate="2018-07-23"
              defaultCurrentViewName="Week"
            />

            <DayView startDayHour={9} endDayHour={18} />
            <WeekView startDayHour={10} endDayHour={19} />

            <Toolbar />
            <ViewSwitcher />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>
    );
  }
}
