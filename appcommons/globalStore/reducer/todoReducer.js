import * as actions from "../action/actions";

const Initial = {
  "744cdd12-dda0-4040-87a9-e9c2ae94b14f": {
    description: "sample data",
    dueDate: "29/04/2021 08:56:02",
    id: "744cdd12-dda0-4040-87a9-e9c2ae94b14f",
    title: "Task1",
    type: "SUCCESS",
    status: "ACTIVE",
  },
  "d902b2be-a77e-41c5-accb-d427df6afe60": {
    description: "sample data2",
    dueDate: "27/04/2021 08:56:02",
    id: "d902b2be-a77e-41c5-accb-d427df6afe60",
    title: "Task2",
    type: "SUCCESS",
    status: "COMPLETED",
  },
};
export default function TODOLIST(state = Initial, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, ...action.payload };
    case actions.REMOVE_TODO:
      delete state[action.payload];
      return { ...state };
    case actions.CLEAR_TODO:
      return {};
    default:
      return state;
  }
}
