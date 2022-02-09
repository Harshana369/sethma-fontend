import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Grid, Button } from "@material-ui/core";
import PatientCreate from "./Sub-Componets/PatientCreate";

// from ekee thiyana input text field
const initialValue = { name: "", email: "", phone: "", address: "" };

function Patient() {
  const [gridApi, setGridApi] = useState(null);

  // table ekee data set wenawa
  const [tableData, setTableData] = useState(null);

  // popup data
  const [open, setOpen] = React.useState(false);

  //from ekeee deta sate eka
  const [formData, setFormData] = useState(initialValue);

  // popup open patient
  const handleClickOpen = () => {
    setOpen(true);
  };

  // popup colse patient
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
  };

  // const url = `http://localhost:4000/users`;

  const url = `http://localhost:8000/api/patients`;

  // table eke header name tikaii action type tikaii
  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Nic", field: "nic" },
    { headerName: "Name", field: "name" },
    { headerName: "Address", field: "address" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Email", field: "email" },

    {
      headerName: "Actions",
      field: "id",

      cellRendererFramework: (params) => (
        <div>
          {/* data update karana button eka table ekee */}
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => handleUpdate(params.data)}
          >
            Udt
          </Button>

          {/* data delete karana button eka table ekeee */}
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(params.value)}
          >
            Dlt
          </Button>
        </div>
      ),
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

  // form ekeee deta add
  const onChange = (e) => {
    
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // state ekee deta awa kiyala danagannawa
  const onGridReady = (params) => {
    setGridApi(params);
  };

  //  update Patient and pop up window
  const handleUpdate = (oldData) => {
    setFormData(oldData);
    handleClickOpen();
  };
  //deleting a user
  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure, you want to delete this row",
      id
    );

    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" })
        .then((resp) => resp.json())
        .then((resp) => getUsers());
    }
  };

  // Patient update and save api call
  const handleFormSubmit = () => {
    if (formData.id) {
      //updating a user
      const confirm = window.confirm(
        "Are you sure, you want to update this row ?"
      );
      confirm &&
        fetch(url + `/${formData.id}`, {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "content-type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((resp) => {
            handleClose();
            getUsers();
          });
    } else {
      //adding new user
      fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json;",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          handleClose();
          getUsers();
        });
    }
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
      <h1 align="center">Patient Panel</h1>
      <h4>Patient all data screen</h4>
      <Grid align="right">
        <Button
          variant="contained"
          className="mb-3"
          color="primary"
          onClick={handleClickOpen}
        >
          Add Patient
        </Button>
      </Grid>
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
      <PatientCreate
        // popu open
        open={open}
        // popu close
        handleClose={handleClose}
        // fome ekeee deta sate eka
        data={formData}
        // text field wala deta set wenawa
        onChange={onChange}
        // handleFormSubmit ekee thiyana method pase karanawa
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default Patient;
