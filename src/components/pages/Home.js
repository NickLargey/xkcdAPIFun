import React, { Fragment } from "react";
import ComicItem from "../comics/comicItem";

import Search from "../comics/Search";

const Home = ({ comic }) => (
  <Fragment>
    <Search />
    <div className="all-center">
      <ComicItem />
    </div>
  </Fragment>
);

export default Home;
