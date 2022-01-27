import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddCustomers extends Component {
  state = {
    name: "",
    address: "",
    phone: "",
    email: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveCustomers = async (e) => {
    e.preventDefault();

    const res = await axios.post('/api/add-customer', this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>
                  Customer Data
                  <Link to={"/"} className="btn btn-primary btn-sm float-end">
                    Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.saveCustomers}>
                  <div className="form-group mb-3">
                    <label>Customer Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleInput}
                      value={this.state.name}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Customer Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={this.handleInput}
                      value={this.state.address}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Customer phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      onChange={this.handleInput}
                      value={this.state.phone}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Customer Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={this.handleInput}
                      value={this.state.email}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Save Button
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCustomers;
