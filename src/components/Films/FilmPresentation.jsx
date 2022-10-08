import React from "react";
import FilmItem from "./FilmItem";
import FilmModal from "./FilmModal";
import useModal from "../../hooks/useModal";
import { useState } from "react";
import { Icon, CardTitle, Row, Col, Card, Container } from "react-materialize";
export default function FilmPresentation({ films }) {
    // const [selectedFilm, setSelectedFilm] = useState({});

    // const { modalVisible, toggleModal } = useModal();
    // const handleSetSelectedFilm = (film) => {
    //     setSelectedFilm(film);
    //     toggleModal();
    // };
    return (
        <>
            <Container>
                <Row>
                    {films.map((film, index) => {
                        return (
                            <Col s={12} m={6} l={4}>
                                <FilmItem
                                    key={index}
                                    filmData={film}
                                    // handleSetSelectedFilm={handleSetSelectedFilm}
                                ></FilmItem>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
        // <div className="film">
        //     <div className="container">
        //         {films.map((film, index) => {
        //             return (
        //                 <FilmItem
        //                     key={index}
        //                     filmData={film}
        //                     handleSetSelectedFilm={handleSetSelectedFilm}
        //                 ></FilmItem>
        //             );
        //         })}
        //     </div>
        //     {modalVisible && (
        //         <FilmModal
        //             toggleModal={toggleModal}
        //             filmData={selectedFilm}
        //         ></FilmModal>
        //     )}
        // </div>
    );
}
