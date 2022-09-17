import React from "react";
import FilmItem from "./FilmItem";
export default function FilmPresentation({ films }) {
    return (
        <div className="film">
            <div className="container">
                {films.map((film, index) => {
                    return <FilmItem key={index} filmData={film}></FilmItem>;
                })}
            </div>
        </div>
    );
}
