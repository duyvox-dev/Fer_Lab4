import React from "react";
import { truncate } from "../../utils/textUtil";
export default function FilmItem({
    filmData = {},
    handleSetSelectedFilm = () => {},
}) {
    return (
        <div className="film-item">
            <div className="film-image">
                <img src={filmData?.image} alt="" />
            </div>
            <div className="film-content">
                <h3 className="film-title">{filmData?.title}</h3>
                <div className="film-info">
                    <span className="film-sub-info">
                        <span className="film-sub-title">Year</span>
                        <span>{filmData?.year}</span>
                    </span>
                    <span className="film-sub-info">
                        <span className="film-sub-title">Nation</span>
                        <span>{filmData?.nation}</span>
                    </span>
                </div>
            </div>
            <div className="film-overlay">
                <p className="film-overlay-info">
                    {truncate(filmData?.info, 150)}
                </p>
                <span
                    className="film-overlay-button"
                    onClick={() => {
                        handleSetSelectedFilm(filmData);
                    }}
                >
                    See more information
                </span>
            </div>
        </div>
    );
}
