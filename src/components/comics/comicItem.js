import React, { useContext } from "react";
import PropTypes from "prop-types";
import XkcdContext from "../../context/xkcdContext";
import Spinner from "../layout/Spinner";

const ComicItem = () => {
  const xkcdContext = useContext(XkcdContext);
  const { comic, loading, error } = xkcdContext;
  if (loading) {
    return (
      <Spinner>
        <div className="all-center">
          <h3>
            {" "}
            PLEASE VISIT{" "}
            <a
              href="https://cors-anywhere.herokuapp.com/corsdemo"
              target="_blank"
            >
              cors-anywhere
            </a>{" "}
            TO GAIN NEEDED PERMISSIONS
          </h3>
        </div>{" "}
      </Spinner>
    );
  } else {
    return (
      <div className="all-center">
        <h3>{comic.title}</h3>
        <p>
          {comic.month}-{comic.day}-{comic.year}
        </p>
        <img src={comic.img} alt="" />
        <p className="lead">{comic.alt}</p>
      </div>
    );
  }
};

ComicItem.propTypes = {
  comic: PropTypes.object.isRequired,
};

export default ComicItem;
