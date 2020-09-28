import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
      {
        id: 4,
        name: "Keyser Söze",
        email: "ksoze@yahoo.com",
        phone: "310-555-5555",
      },
      {
        id: 5,
        name: "Rolo Tomassi",
        email: "rtomassi@fastmail.com",
        phone: "818-555-5555",
      },
    ],

    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
