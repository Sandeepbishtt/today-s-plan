import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import Plan from "./Plan";
import { GlobalContext } from "../GlobalState";
const AddPlan = () => {
  const [plan, setPlan] = useState("");
  const { addEvent } = useContext(GlobalContext);
  const { events } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newPlan = {
      id: Math.floor(Math.random() * 100000000),
      plan,
    };
    addEvent(newPlan);
    setPlan("");
  };

  const onChangeHandler = (e) => {
    setPlan(e.target.value);
  };

  return (
    <div className="container-fluid my-5  ">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3 ">
          <h1 className="text-center">Today's plan</h1>
          <form className="row" onSubmit={onSubmit}>
            <div className="col-9">
              <input
                type="text"
                required
                className="form-control"
                placeholder="Write Plan here"
                value={plan}
                onChange={onChangeHandler}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-warning px-5 fw-bold" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex   flex-wrap justify-content-start ">
        {" "}
        {events.map((item) => (
          <Plan key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default AddPlan;
