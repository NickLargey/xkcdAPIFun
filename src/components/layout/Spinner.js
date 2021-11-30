import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
    <div className="all-center">
      <h3>
        {" "}
        PLEASE VISIT{" "}
        <a
          href="https://cors-anywhere.herokuapp.com/corsdemo"
          target="_blank"
          rel="noreferrer"
        >
          cors-anywhere
        </a>{" "}
        TO GAIN NEEDED PERMISSIONS
      </h3>
    </div>{" "}
  </Fragment>
);

export default Spinner;
