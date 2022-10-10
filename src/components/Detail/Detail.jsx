import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useModal from "../../hooks/useModal";
import FilmModal from "../Films/FilmModal";
import { Container, Row, Col, Button, Icon } from "react-materialize";
export default function Detail({ films = [] }) {
    const { id } = useParams();
    const [curFilm, setCurFilm] = useState({});
    const { modalVisible, toggleModal } = useModal();

    const handleOpenFilmTrailer = () => {
        toggleModal();
    };
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
        <>
            <FilmModal
                isOpen={modalVisible}
                filmData={curFilm}
                toggleModal={toggleModal}
            ></FilmModal>
            <Container className="film-detail-container">
                <h3 className="film-detail-heading center pink-text text-darken-1">
                    {curFilm?.title}
                </h3>
                <Row className="film-detail-row">
                    <Col s={12} m={6} l={5} className="film-detail-col">
                        <img
                            src={curFilm?.image}
                            alt=""
                            className="film-detail-image"
                        />
                        <Button
                            node="button"
                            large
                            waves="light"
                            className="film-detail-button pink lighten-2"
                            href="#filmModal"
                            onClick={() => {
                                handleOpenFilmTrailer();
                            }}
                        >
                            <Icon right>voice_chat</Icon>Trailer
                        </Button>
                    </Col>
                    <Col s={12} m={6} l={7} className="film-detail-col">
                        {/* <p>
                            <span className="film-detail-head">Name: </span>
                            <span className="film-detail-info">
                                {curFilm?.title}
                            </span>
                        </p> */}
                        <p>
                            <span className="film-detail-head pink-text text-darken-2">
                                Year Of Production:{" "}
                            </span>
                            <span className="film-detail-info">
                                {curFilm?.year}
                            </span>
                        </p>
                        <p>
                            <span className="film-detail-head pink-text  text-darken-2">
                                Nation:{" "}
                            </span>
                            <span className="film-detail-info">
                                {curFilm?.nation}
                            </span>
                        </p>
                        <p>
                            <span className="film-detail-head  pink-text text-darken-2">
                                Description:{" "}
                            </span>
                            <span className="film-detail-info">
                                {curFilm?.info}
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
        // <div className="detail">
        //     <div className="detail-container">
        //         <div className="detail-image">
        //             <img src={curFilm?.image} alt="" />
        //             <span className="detail-year">{curFilm?.year}</span>
        //         </div>
        //         <h2 className="detail-personal">
        //             <span className="detail-name">{curFilm?.title}</span>
        //             <span className="detail-personal-divider"> - </span>
        //             <span className="detail-nation">{curFilm?.nation}</span>
        //         </h2>

        //         <p className="detail-info">{curFilm?.info}</p>
        //     </div>
        // </div>
    );
}
