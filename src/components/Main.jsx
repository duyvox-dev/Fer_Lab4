import React from "react";
import { players } from "../shared/playerData";
import Players from "./Players/Players";
export default function Main() {
    return (
        <div>
            <Players players={players}></Players>
        </div>
    );
}
