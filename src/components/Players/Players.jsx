import React from "react";
import PlayerItem from "./PlayerItem";
export default function Players({ players }) {
    return (
        <div className="players">
            <div className="container">
                {players.map((player) => {
                    return <PlayerItem playerData={player}></PlayerItem>;
                })}
            </div>
        </div>
    );
}
