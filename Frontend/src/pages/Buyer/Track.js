import React from "react";
import TrackShipmentContent from "../../components/Buyer/Track_shipemt/TrackShipmentContent";
import Header from "../../components/Header";

const Track = () => {
  return (
    <div className=" flex-1">
     <Header/>
      <div className="main flex">
        <TrackShipmentContent />
      </div>
    </div>
  );
};

export default Track;