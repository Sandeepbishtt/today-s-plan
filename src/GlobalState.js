import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  events: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function addEvent(event) {
    dispatch({
      type: "ADD_VALUE",
      payload: event,
    });
  }
  function deleteEvent(id) {
    dispatch({
      type: "DELETE_EVENT",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ events: state.events, addEvent, deleteEvent }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
