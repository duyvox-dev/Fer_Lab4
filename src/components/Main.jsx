import React from "react";
import { players } from "../shared/ListOfPlayers";
import { films } from "../shared/ListOfFilms";
import PlayersPresentation from "./Players/PlayersPresentation";
import FilmPresentation from "./Films/FilmPresentation";
export default function Main() {
    return (
        <>
            <PlayersPresentation players={players}></PlayersPresentation>
            <FilmPresentation films={films}></FilmPresentation>
        </>
    );
}
