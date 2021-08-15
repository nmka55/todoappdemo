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

export function todoAdd(data) {
  return (dispatch) => {
    dispatch({
      type: TODO_ADD,
      data,
    });
  };
}

export function todoEdit(data) {
  return (dispatch) => {
    dispatch({
      type: TODO_EDIT,
      data: data,
    });
  };
}

export function todoDelete(id) {
  return (dispatch) => {
    dispatch({
      type: TODO_DELETE,
      data: id,
    });
  };
}
