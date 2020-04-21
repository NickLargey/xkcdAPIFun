import React, { useReducer } from "react";
import axios from "axios";
import xkcdContext from "./xkcdContext";
import xkcdReducer from "./xkcdReducer";
import { SET_XKCD, SET_NUM, ERROR, REMOVE_ERROR } from "./types";

const XkcdState = (props) => {
  const initialState = {
    maxNum: "",
    comic: {},
    error: null,
  };

  const [state, dispatch] = useReducer(xkcdReducer, initialState);

  // Set the max searchable number
  const setNum = async () => {
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

  return (
    <xkcdContext.Provider
      value={{
        maxNum: state.maxNum,
        comic: state.comic,
        error: state.error,
        setXkcd,
        setNum,
      }}
    >
      {props.children}
    </xkcdContext.Provider>
  );
};

export default XkcdState;
