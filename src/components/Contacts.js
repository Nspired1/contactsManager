import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div>
        <h1 className="display-4 mb-4">
          <span className="text-danger">Contacts</span> Manager
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact._id} contact={contact} />
        ))}
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

//reducer is contact, contacts is the array of contacts
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
