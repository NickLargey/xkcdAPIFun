import { SET_XKCD, SET_NUM, ERROR, REMOVE_ERROR, SET_LOADING } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_XKCD:
      return {
        ...state,
        comic: action.payload,
        loading: false,
      };
    case SET_NUM:
      return {
        ...state,
        maxNum: action.payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
