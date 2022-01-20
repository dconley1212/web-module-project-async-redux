import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getDogImage = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((resp) => {
        dispatch({ type: FETCH_SUCCESS, payload: resp.data.message });
      })
      .catch((err) => {
        dispatch({ type: FETCH_FAIL, payload: err });
      });
  };
};

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = (dog) => {
  return {
    type: FETCH_SUCCESS,
    payload: dog,
  };
};

export const fetchFail = (err) => {
  return {
    type: FETCH_FAIL,
    payload: err,
  };
};
