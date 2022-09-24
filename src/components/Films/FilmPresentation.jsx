import React from "react";
import FilmItem from "./FilmItem";
import FilmModal from "./FilmModal";
import useModal from "../../hooks/useModal";
import { useState } from "react";
export default function FilmPresentation({ films }) {
    const [selectedFilm, setSelectedFilm] = useState({});

    const { modalVisible, toggleModal } = useModal();
    const handleSetSelectedFilm = (film) => {
        setSelectedFilm(film);
        toggleModal();
    };
    return (
        <div className="film">
            <div className="container">
                {films.map((film, index) => {
                    return (
                        <FilmItem
                            key={index}
                            filmData={film}
                            handleSetSelectedFilm={handleSetSelectedFilm}
                        ></FilmItem>
                    );
                })}
            </div>
            {modalVisible && (
                <FilmModal
                    toggleModal={toggleModal}
                    filmData={selectedFilm}
                ></FilmModal>
            )}
        </div>
    );
}
