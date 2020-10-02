import React, { Component } from "react";
//import { Provider } from "react-redux";
import TextInputGroup from "./TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact } from "../actions/contactActions";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();
    //destructuring properties from state
    const { name, email, phone } = this.state;

    //validation for name field, user is forced to enter a name for contact
    if (name.length < 1) {
      this.setState({ errors: { name: "Name is REQUIRED" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    this.props.addContact(newContact);

    //clears component state, which resets form
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

  render() {
    //Below shows 2 ways of getting inputs from forms,
    //one uses a functional component <TextInputGroup /> and the other uses JSX markup class="form-group"
    //destructured errors from State to avoid TypeError since errors doesn't have a name property unless name is blank
    //and errors.name won't propagate down to TextInputGroup to show an error message for blank name
    const { errors } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
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
              value="Add Contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(null, { addContact })(AddContact);
