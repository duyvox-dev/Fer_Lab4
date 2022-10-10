import React from "react";
import { Modal, Button } from "react-materialize";
export default function FilmModal({
    filmData = {},
    toggleModal = () => {},
    isOpen = false,
}) {
    return (
        <>
            {isOpen && (
                <div className="modal-show">
                    <div
                        // id="modal1"
                        className="modal"
                        style={{ display: "block", top: "30%" }}
                    >
                        <div className="modal-content">
                            <h4 style={{ textTransform: "capitalize" }}>
                                {filmData?.title}
                            </h4>
                            <div>
                                <iframe
                                    width="100%"
                                    height="400px"
                                    src={filmData?.trailer}
                                    title={filmData?.title}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a
                                href="#"
                                className="modal-close red-text"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleModal();
                                }}
                            >
                                Close
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
