import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
export default function SearchPage(props) {
  console.log(props);
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
    </div>
  );
}
