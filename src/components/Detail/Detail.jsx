import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail({ films = [] }) {
    const { id } = useParams();
    const [curFilm, setCurFilm] = useState({});
    useEffect(() => {
        const film = films.find((film) => film?.id == id);
        if (film) setCurFilm(film);
        else setCurFilm({});
    }, [id]);
    useEffect(() => {
        console.log(curFilm);
        if (curFilm?.title) {
            document.title = curFilm?.title;
        } else {
            document.title = "Film not found";
        }
    }, [curFilm]);

    return (
        <div className="detail">
            <div className="detail-container">
                <div className="detail-image">
                    <img src={curFilm?.image} alt="" />
                    <span className="detail-year">{curFilm?.year}</span>
                </div>
                <h2 className="detail-personal">
                    <span className="detail-name">{curFilm?.title}</span>
                    <span className="detail-personal-divider"> - </span>
                    <span className="detail-nation">{curFilm?.nation}</span>
                </h2>

                <p className="detail-info">{curFilm?.info}</p>
            </div>
        </div>
    );
}
