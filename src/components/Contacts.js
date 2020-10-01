import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { GET_CONTACTS } from "../../actions/types";
import PropTypes from "prop-types";

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

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch({ type: GET_CONTACTS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
