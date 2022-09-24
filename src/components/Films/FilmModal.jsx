import React from "react";

export default function FilmModal({ filmData = {}, toggleModal = () => {} }) {
    return (
        <div className="overlay">
            <div className="popup">
                <img src={filmData?.image} alt="" />
                <h2>{filmData?.title}</h2>
                <a
                    href="#"
                    className="close"
                    onClick={() => {
                        toggleModal();
                    }}
                >
                    &times;
                </a>
                <div className="content">{filmData?.info}</div>
            </div>
        </div>
    );
}
