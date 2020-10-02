import React, { Component } from "react";
import TextInputGroup from "./TextInputGroup";
import { connect } from "react-redux";
import { getContact, updateContact } from "../actions/contactActions";
import PropTypes from "prop-types";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact;
    this.setState({ name, email, phone });
  }

  //NOTE: id is used so props.match.params will get id, HOWEVER in the object
  // it is _id because Mongoose generates unique ID's with an underscore
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  onSubmit = (e) => {
    e.preventDefault();
    //destructuring properties from state
    const { name, email, phone } = this.state;

    //validation for name, user must enter a name for contact
    if (name.length < 1) {
      this.setState({ errors: { name: "Name is REQUIRED" } });
      return;
    }

    const { id } = this.props.match.params;

    //_id is needed to keep unique keys for react to correctly display contacts
    const updContact = {
      id,
      name,
      email,
      phone,
    };
    this.props.updateContact(updContact);

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

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              type="text"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.onChange}
              error={this.state.errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              type="text"
              placeholder="Enter Phone Number"
              value={this.state.phone}
              onChange={this.onChange}
            />

            <input
              type="submit"
              value="Update Contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
};

//want the single contact object, not the array, hence state.contact.contact
const mapStateToProps = (state) => ({
  contact: state.contact.contact,
});

export default connect(mapStateToProps, { getContact, updateContact })(
  EditContact
);
