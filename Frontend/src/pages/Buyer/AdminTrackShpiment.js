import React from "react";
import AdminTrack from "../../components/Buyer/Track_shipemt/AdminTrack";
import TrackShipmentContent from "../../components/Buyer/Track_shipemt/TrackShipmentContent";
import Header from "../../components/Header";

const AdminTrackShipment = ({user}) => {
    return (
        <div className=" flex-1">
            <Header />
            <div className="main flex">
                <AdminTrack user={user}/>
            </div>
        </div>
    );
};

export default AdminTrackShipment;