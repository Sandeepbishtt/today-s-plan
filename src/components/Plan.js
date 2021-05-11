import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import "./Plan.css";

const Plan = ({ item }) => {
  const { deleteEvent } = useContext(GlobalContext);
  return (
    <ul className="note-container">
      <h3>{item.plan}</h3>
      <span onClick={() => deleteEvent(item.id)}>&#10007;</span>
    </ul>
  );
};

export default Plan;
