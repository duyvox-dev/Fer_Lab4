import React from "react";
import { Link } from "react-router-dom";
export default function PlayerItem({ playerData }) {
    return (
        <div className="card">
            <img src={playerData.img} alt="" />
            <h3>{playerData.name}</h3>
            <p>{playerData.club}</p>
            <Link to={`/detail/${playerData?.id}`}>Detail</Link>
        </div>
    );
}
