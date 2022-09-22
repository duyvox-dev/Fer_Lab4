import React from "react";

export default function PlayerItem({ playerData, handleSetPlayer = () => {} }) {
    return (
        <div className="card">
            <img src={playerData.image} alt="" />
            <h3>{playerData.name}</h3>
            <p>{playerData.club}</p>
            <a
                href="#"
                onClick={() => {
                    handleSetPlayer(playerData);
                }}
            >
                Detail
            </a>
        </div>
    );
}
