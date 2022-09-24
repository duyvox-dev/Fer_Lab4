import React, { Component } from "react";
import { players } from "../shared/ListOfPlayers";
import { films } from "../shared/ListOfFilms";
import PlayersPresentation from "./Players/PlayersPresentation";
import FilmPresentation from "./Films/FilmPresentation";

export default class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            players: players,
            films: films,
        };
    }
    render() {
        return (
            <div className="main">
                {/* <PlayersPresentation players={this.state.players} /> */}
                <FilmPresentation films={this.state.films} />
            </div>
        );
    }
}
