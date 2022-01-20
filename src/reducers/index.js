import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
  image: "",
  isFetching: false,
  error: "",
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
        error: "Sorry an error occured and we couldn't find any doggos for you",
      };
    default:
      return state;
  }
};

export default reducer;
