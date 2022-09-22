import React, { useState } from "react";
import PlayerItem from "./PlayerItem";
export default function PlayersPresentation({ players }) {
    const [curPlayer, setCurPlayer] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const handleSetPlayer = (player) => {
        setCurPlayer(player);
        toggleModal();
    };
    return (
        <div className="players">
            <div className="container">
                {players.map((player, index) => {
                    return (
                        <PlayerItem
                            key={index}
                            playerData={player}
                            handleSetPlayer={handleSetPlayer}
                        ></PlayerItem>
                    );
                })}
            </div>
            {modalVisible && (
                <div className="overlay">
                    <div className="popup">
                        <img src={curPlayer?.image} alt="" />
                        <h2>{curPlayer?.name}</h2>
                        <a
                            href="#"
                            className="close"
                            onClick={() => {
                                toggleModal();
                            }}
                        >
                            &times;
                        </a>
                        <div className="content">{curPlayer?.info}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
