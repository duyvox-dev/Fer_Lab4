import React from "react";

export default function Contact() {
    document.title = "Player Contact";
    return (
        <div className="contact">
            <h2
                className="contact-heading
            "
            >
                Contact information
            </h2>
            <div className="contact-container">
                <a href="tel:841626877775" className="contact-item">
                    <div className="contact-icon">
                        <img src="/assets/img/contact/phone.svg" alt="" />
                    </div>
                    <div className="contact-info">+841626877775</div>
                </a>
                <a href="mailto:someone@example.com" className="contact-item">
                    <div className="contact-icon">
                        <img src="/assets/img/contact/mail.svg" alt="" />
                    </div>
                    <div className="contact-info">vobaoduy123@gmail.com</div>
                </a>
                <a
                    href="https://www.facebook.com/vobaoduy123"
                    target="_blank"
                    className="contact-item"
                >
                    <div className="contact-icon">
                        <img src="/assets/img/contact/facebook.svg" alt="" />
                    </div>
                    <div className="contact-info">vobaoduy123</div>
                </a>
            </div>
        </div>
    );
}
