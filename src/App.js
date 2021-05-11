import React from "react";
import { GlobalProvider } from "./GlobalState";
import AddPlan from "./components/AddPlan";

const App = () => {
  return (
    <GlobalProvider>
      <AddPlan />
    </GlobalProvider>
  );
};

export default App;
