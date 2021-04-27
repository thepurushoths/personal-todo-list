import * as actions from "./actions";

export const addTODO = (value = {}) => {
  return {
    type: actions.ADD_TODO,
    payload: { ...value },
  };
};

export const removeTODO = (todoId) => {
  return {
    type: actions.REMOVE_TODO,
    payload: todoId,
  };
};

export const clear = () => {
  return {
    type: actions.CLEAR_TODO,
  };
};
