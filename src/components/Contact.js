import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import { deleteContact } from "../actions/contactActions";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (_id) => {
    this.props.deleteContact(_id);
  };

  render() {
    //destructuring props object to make access to props shorter
    const { _id, name, email, phone } = this.props.contact;
    //const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <FontAwesomeIcon
            icon={["fas", "sort-down"]}
            onClick={this.onShowClick}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={["fas", "times"]}
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, _id)}
          />
          <Link to={`contacts/edit/${_id}`}>
            <FontAwesomeIcon
              icon={["fas", "pencil-alt"]}
              style={{
                cursor: "pointer",
                float: "right",
                marginRight: "1rem",
              }}
            />
          </Link>
        </h4>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

//proptypes used as backup check on data type being exported
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(null, { deleteContact })(Contact);
