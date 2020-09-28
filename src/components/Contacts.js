import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          //destructuring contacts object for brevity in Contact component
          const { contacts } = value;

          return (
            <div>
              <h1 className="display-4 mb-4">
                <span className="text-danger">Contacts</span> Manager
              </h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
