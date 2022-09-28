import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail({ players = [] }) {
    const { id } = useParams();
    const [curPlayer, setCurPlayer] = useState({});
    useEffect(() => {
        const player = players.find((player) => player?.id === id);
        if (player) setCurPlayer(player);
        else setCurPlayer({});
    }, [id]);
    useEffect(() => {
        console.log(curPlayer);
    }, [curPlayer]);
    return <div>Detail</div>;
}
