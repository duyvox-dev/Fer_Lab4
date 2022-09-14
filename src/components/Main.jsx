import React from "react";
import { players } from "../shared/playerData";
import PlayerList from "./Players/PlayerList";
export default function Main() {
    return (
        <div>
            <PlayerList players={players}></PlayerList>
        </div>
    );
}
