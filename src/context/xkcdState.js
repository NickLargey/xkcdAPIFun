import React, { useReducer } from "react";
import axios from "axios";
import xkcdContext from "./xkcdContext";
import xkcdReducer from "./xkcdReducer";
import { SET_XKCD, SET_NUM, ERROR, REMOVE_ERROR, SET_LOADING } from "./types";

const XkcdState = (props) => {
  const initialState = {
    maxNum: "",
    comic: {},
    error: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(xkcdReducer, initialState);

  // Set the max searchable number
  const setNum = async () => {
    setLoading();
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json"
    );
    dispatch({
      type: SET_NUM,
      payload: res.data.num,
    });
  };

  // Set xkcd
  const setXkcd = async (text = "") => {
    setLoading();
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://xkcd.com/${text}/info.0.json`
      );
      dispatch({
        type: SET_XKCD,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: "That comic does not exist! Please enter a valid number!",
      });
      setTimeout(() => dispatch({ type: REMOVE_ERROR }), 5000);
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <xkcdContext.Provider
      value={{
        maxNum: state.maxNum,
        comic: state.comic,
        error: state.error,
        loading: state.loading,
        setXkcd,
        setNum,
        setLoading,
      }}
    >
      {props.children}
    </xkcdContext.Provider>
  );
};

export default XkcdState;
