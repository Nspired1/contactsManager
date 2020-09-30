import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "./TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`/api/contacts/${id}`);
    const foundContact = res.data;
    this.setState({
      name: foundContact.name,
      email: foundContact.email,
      phone: foundContact.phone,
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    //destructuring properties from state
    const { name, email, phone } = this.state;

    //validation for name field, user must enter a name for contact
    if (name.length < 1) {
      this.setState({ errors: { name: "Name is REQUIRED" } });
      return;
    }

    const updateContact = {
      name,
      email,
      phone,
    };

    const { id } = this.props.match.params;

    const res = await axios.put(`/api/contacts/${id}`, updateContact);

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    //clears component state to reset form
    //also clears errors object so errors aren't propagated
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    //redirect to homepage after entering new contact
    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  //Below shows 2 ways of getting inputs from forms, one uses a functional component <TextInputGroup /> and
  //the other uses JSX markup class="form-group"
  render() {
    //destructured errors from State to avoid TypeError since errors doesn't have a name property unless name is blank
    //and errors.name won't propagate down to TextInputGroup to show an error message for blank name
    const { errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
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
                    value="Update Contact"
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

export default EditContact;
