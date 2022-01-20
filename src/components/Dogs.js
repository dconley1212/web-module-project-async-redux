import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStart, fetchSuccess, fetchFail, getDogImage } from "../actions";

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

  if (error) {
    return <h3>{error}</h3>;
  }

  if (isFetching) {
    return <h3>Fetching a dog for you!</h3>;
  }

  const handleButtonClick = () => {
    dispatch(getDogImage());
  };

  return (
    <div>
      <h3>What do you think of this guy?</h3>
      <button onClick={handleButtonClick}>Click to see more pals!</button>
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
