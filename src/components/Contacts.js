import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        phone: "415-555-5555",
      },
      {
        id: 2,
        name: "Genevieve Galard",
        email: "ggalard@protonmail.com",
        phone: "510-555-5555",
      },
      {
        id: 3,
        name: "Ashley Rosenthal",
        email: "arose@outlook.com",
        phone: "972-555-5555",
      },
    ],
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter((contact) => contact.id !== id);

    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
