import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
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
    contacts: [],

    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  componentDidMount() {
    // axios
    //   .get("/api/contacts")
    //   .then((res) => this.setState({ contacts: res.data }));
    fetch("/api/contacts")
      .then((data) => data.json())
      .then((contacts) => this.setState({ contacts }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
