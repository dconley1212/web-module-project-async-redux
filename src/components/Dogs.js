import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStart, fetchSuccess, fetchFail } from "../actions";

const Dogs = (props) => {
  const { image, isFetching, error, dispatch } = props;

  useEffect(() => {
    dispatch(fetchStart());
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((resp) => {
        dispatch(fetchSuccess(resp.data.message));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  }, []);

  const handleButtonClick = () => {
    dispatch(fetchStart);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click find breeds!</button>
      <p>{isFetching}</p>
      <img src={image} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    image: state.image,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Dogs);
