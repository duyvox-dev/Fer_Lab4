import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail({ players = [] }) {
    const { id } = useParams();
    const [curPlayer, setCurPlayer] = useState({});
    useEffect(() => {
        const player = players.find((player) => player?.id == id);
        if (player) setCurPlayer(player);
        else setCurPlayer({});
    }, [id]);
    useEffect(() => {
        console.log(curPlayer);
        if (curPlayer?.name) {
            document.title = curPlayer?.name;
        } else {
            document.title = "Player not found";
        }
    }, [curPlayer]);

    return (
        <div className="detail">
            <div className="detail-container">
                <div className="detail-image">
                    <img src={curPlayer?.img} alt="" />
                </div>
                <h2 className="detail-personal">
                    <span className="detail-name">{curPlayer?.name}</span>
                    <span className="detail-personal-divider"> - </span>
                    <span className="detail-club">{curPlayer?.club}</span>
                </h2>
                <p className="detail-cost">
                    <span>Marketplace: €</span>
                    {curPlayer?.cost}
                </p>
                <p className="detail-info">{curPlayer?.info}</p>
            </div>
        </div>
    );
}
