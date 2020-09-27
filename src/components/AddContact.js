import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "./TextInputGroup";
import { v4 as uuidv4 } from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    //clears component state to reset form
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  //Below shows 2 ways of getting inputs from forms, one uses a functional component <TextInputGroup /> and the other uses JSX markup class="form-group"
  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      className="form-control form-control-lg"
                      placeholder="Enter Phone Number"
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
