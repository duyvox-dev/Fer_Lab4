import React from "react";

export default function FilmItem({ filmData }) {
    return (
        <a href="#" className="film-item">
            <div className="film-image">
                <img src={filmData.image} alt="" />
            </div>
            <div className="film-content">
                <h3 className="film-title">{filmData.title}</h3>
                <div class="film-info">
                    <span className="film-sub-info">
                        <span className="film-sub-title">Year</span>
                        <span>{filmData.year}</span>
                    </span>
                    <span className="film-sub-info">
                        <span className="film-sub-title">Nation</span>
                        <span>{filmData.nation}</span>
                    </span>
                </div>
            </div>
        </a>
    );
}
