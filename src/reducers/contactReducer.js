import { GET_CONTACTS } from "../actions/types";

const initialState = {
  contacts: [
    {
      _id: 1,
      name: "Jane Doe",
      email: "jdoe@gmail.com",
      phone: "555-555-5555",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
