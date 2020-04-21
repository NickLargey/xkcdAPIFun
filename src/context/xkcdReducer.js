import { SET_XKCD, SET_NUM, ERROR, REMOVE_ERROR } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_XKCD:
      return {
        ...state,
        comic: action.payload,
      };
    case SET_NUM:
      return {
        ...state,
        maxNum: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
