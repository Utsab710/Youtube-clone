import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import TuneIcon from "@mui/icons-material/Tune";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />

        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image=""
        channel="Utsab Shrestha"
        verified
        subs="1M"
        noOfvideos={30}
        description=" hey i am utsab"
      />
    </div>
  );
}

export default SearchPage;
