import {
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT,
  USER_LOGIN,
  USER_LOGOUT,
} from "../constants";

export function userLogin(username, password) {
  return (dispatch) => {
    dispatch({ type: USER_LOGIN, userData: { username, password } });
  };
}

export function userLogout() {
  return (dispatch) => {
    dispatch({ type: USER_LOGOUT });
  };
}

export function todoAdd(id, tag, title, location, time, status, color) {
  return (dispatch) => {
    dispatch({
      type: TODO_ADD,
      todo: [...todo, { id, tag, title, location, time, status, color }],
    });
  };
}

export function todoEdit(id, tag, title, location, time, status, color) {
  return (dispatch) => {
    dispatch({
      type: TODO_EDIT,
      todo: todo.map((x) => {
        if (x?.id === id) {
          x = {
            tag,
            title,
            location,
            time,
            status,
            color,
          };
        }
      }),
    });
  };
}

export function todoDelete(id) {
  return (dispatch) => {
    dispatch({
      type: TODO_DELETE,
      todo: todo.filter((x) => x?.id !== id),
    });
  };
}
