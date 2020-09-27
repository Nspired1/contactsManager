import React, { Component } from "react";
import "../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Consumer } from "../context";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };

  render() {
    //destructuring props object to make access to props shorter
    const { id, name, email, phone } = this.props.contact;
    //const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
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
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//proptypes used as backup check on data type being exported
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
