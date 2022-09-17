import React from "react";
import { players } from "../shared/ListOfPlayers";
import PlayersPresentation from "./Players/PlayersPresentation";
export default function Main() {
    return (
        <>
            <PlayersPresentation players={players}></PlayersPresentation>
        </>
    );
}
