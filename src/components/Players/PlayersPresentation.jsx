import React from "react";
import PlayerItem from "./PlayerItem";
export default function PlayersPresentation({ players }) {
    return (
        <div className="players">
            <div className="container">
                {players.map((player, index) => {
                    return (
                        <PlayerItem
                            key={index}
                            playerData={player}
                        ></PlayerItem>
                    );
                })}
            </div>
        </div>
    );
}
