const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case "ADD_VALUE":
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    default:
      return state;
  }
};
export default AppReducer;
