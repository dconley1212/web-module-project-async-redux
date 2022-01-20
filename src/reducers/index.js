import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
  image: "",
  isFetching: false,
  error: "Error",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        image: "",
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        image: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        image: "",
        isFetching: false,
        error: "Error, can retrieve any images of German Short-hair Pointers",
      };
    default:
      return state;
  }
};

export default reducer;
