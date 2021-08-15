import { TODO_ADD, TODO_DELETE, TODO_EDIT } from "../constants";

const initialState = {
  list: [],
};

const todo = (state = initialState, action) => {
  console.log("REDUCER", action);
  switch (action.type) {
    case TODO_ADD:
      let temp = 0;
      if (state?.list?.length > 0) {
        temp =
          Math.max.apply(
            null,
            state?.list?.map((x) => {
              return x?.id;
            })
          ) + 1;
      }
      return {
        ...state,
        list: [...state?.list, { ...action.data, id: temp }],
      };
    // return { ...initialState };
    case TODO_DELETE:
      return {
        ...state,
        list: state?.list?.filter((x) => x?.id !== action.data),
      };
    case TODO_EDIT:
      let nana = state?.list?.map((x) => {
        if (x?.id === action?.data?.id) {
          x = action?.data;
        }
        return x;
      });

      return {
        ...state,
        list: nana,
      };
    default:
      return state;
  }
};

export default todo;
