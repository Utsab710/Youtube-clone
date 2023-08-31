import React from "react";
import "./SearchPage.css";
import VideoRow from "./VideoRow";
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
      <hr />
      <VideoRow
        views="1.3M"
        subs="23k"
        description="Do you want a free course"
        timestamp="1 seconds ago"
        channel="US"
        title="Let's build Youtube-clone"
        image=""
      />
    </div>
  );
}

export default SearchPage;
