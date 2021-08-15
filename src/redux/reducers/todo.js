import { TODO_ADD, TODO_DELETE, TODO_EDIT } from "../constants";

const initialState = {
  todo: [],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
    case TODO_DELETE:
    case TODO_EDIT:
      return {
        ...state,
        todo: { ...action.todo },
      };
    default:
      return state;
  }
};

export default todo;
