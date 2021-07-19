import React, { useState, useContext, useEffect } from "react";

import XkcdContext from "../../context/xkcdContext";
import Spinner from "../layout/Spinner";

const Search = () => {
  const xkcdContext = useContext(XkcdContext);
  // text === state item, setText === function for 'useState' of state item's value. in this case ""
  const [text, setText] = useState("");

  useEffect(() => {
    xkcdContext.setNum();
    // eslint-disable-next-line
  }, []);

  const { maxNum, error } = xkcdContext;
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    xkcdContext.setXkcd(text);
    setText("");
  };

  if (xkcdContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {xkcdContext.error !== null && (
          <div>
            <h1 className="all-center">{error}</h1>
          </div>
        )}
        <p className="lead all-center">
          Press the search button to return today's comic or enter a number up
          to <strong style={{ color: "red" }}>{maxNum}</strong>
        </p>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search a comic's number..."
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Get A Comic!"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
};
export default Search;
