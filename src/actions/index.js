import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

// export const getPointerImage = () => {
//   return (dispatch) => {
//     dispatch({ type: FETCH_START });
//     axios
//       .get("https://dog.ceo/api/breed/GERMANPOINTER/images/random")
//       .then((resp) => console.log(resp));
//   };
// };

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
