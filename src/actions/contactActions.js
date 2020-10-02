import { GET_CONTACTS } from "./types";
import { ADD_CONTACT } from "./types";
import { DELETE_CONTACT } from "./types";
import { GET_CONTACT } from "./types";
import { UPDATE_CONTACT } from "./types";
import axios from "axios";

export const getContacts = () => async (dispatch) => {
  const res = await axios.get(`/api/contacts`);
  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  });
};

//get a SINGLE contact
export const getContact = (_id) => async (dispatch) => {
  const res = await axios.get(`/api/contacts/${_id}`);
  dispatch({
    type: GET_CONTACT,
    payload: res.data,
  });
};

export const addContact = (contact) => async (dispatch) => {
  const res = await axios.post(`/api/contacts`, contact);
  dispatch({
    type: ADD_CONTACT,
    payload: res.data,
  });
};

export const updateContact = (contact) => async (dispatch) => {
  const res = await axios.put(`/api/contacts/${contact.id}`);
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data,
  });
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  }
};
