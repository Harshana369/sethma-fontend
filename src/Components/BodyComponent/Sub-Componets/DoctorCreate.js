import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

export default function DoctorCreate({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  const { id, nic, name, email, phone, address, specialization } = data;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {id ? "Update user" : "Create new Doctor"}
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id="nic"
              value={nic}
              onChange={(e) => onChange(e)}
              placeholder="Enter nic"
              label="nic"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="name"
              value={name}
              onChange={(e) => onChange(e)}
              placeholder="Enter name"
              label="Name"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Enter email"
              label="Email"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="phone"
              value={phone}
              onChange={(e) => onChange(e)}
              placeholder="Enter phone number"
              label="Phone Number"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="address"
              value={address}
              onChange={(e) => onChange(e)}
              placeholder="Enter Address"
              label="Address"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <TextField
              id="specialization"
              value={specialization}
              onChange={(e) => onChange(e)}
              placeholder="Enter specialization"
              label="specialization"
              variant="outlined"
              margin="dense"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => handleFormSubmit()}
            variant="contained"
          >
            {id ? "Update" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
