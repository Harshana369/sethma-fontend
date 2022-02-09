import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

 function DoctorTimetable() {

     const [gridApi, setGridApi] = useState(null);

     const [tableData, setTableData] = useState(null);


      const onGridReady = (params) => {
        setGridApi(params);
      };

     const url = `http://localhost:8000/api/schedules`;

     // table eke header name tikaii action type tikaii
     const columnDefs = [
       { headerName: " Schedule Id", field: "id" },
       { headerName: " Doctor Id", field: "doctor_id" },
       { headerName: " Schedule Date", field: "doctor_schedule_date" },
       { headerName: " Schedule Start", field: "doctor_schedule_start" },
       { headerName: " Schedule End", field: "doctor_schedule_end" },
       {
         headerName: "Average Consultation Time",
         field: "average_consultation_time",
       },
     ];

     // call karala user deta gannawa
     useEffect(() => {
       getUsers();
     }, [gridApi]);

     //call karala patient deta tika gannawa.., table sate ekata set karanawaaa
     const getUsers = () => {
       fetch(url)
         .then((resp) => resp.json())
         .then((resp) => setTableData(resp));
     };

   
     // table ekata add wenna onii dewall
     const defaultColDef = {
       sortable: true,
       flex: 1,
       filter: true,
       floatingFilter: true,
     };

 return (
   <div align="center">
     <h4 style={{ marginTop: "40px" }}>Doctor Schedule</h4>
     <div className="ag-theme-alpine" style={{ height: "400px" }}>
       <AgGridReact
         // table ekee users lata dala deta pase
         rowData={tableData}
         // table ekee thiyenna onii headerName name ekaii ekata adala field name ekaii
         columnDefs={columnDefs}
         // table ekee  thiyana wadakalii
         defaultColDef={defaultColDef}
         //api ekenn deta awa kiyala kiyanna oniii
         onGridReady={onGridReady}
       />
     </div>
   </div>
 );}

 export default DoctorTimetable;
