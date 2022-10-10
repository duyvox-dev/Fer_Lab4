import React from "react";
import { useEffect } from "react";
import {
    Container,
    TextInput,
    Textarea,
    Icon,
    Button,
} from "react-materialize";
export default function Contact() {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Container className="contact-container">
                <h3>Contact Us</h3>
                <div>
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        <TextInput
                            name="name"
                            label="Your Name"
                            icon={<Icon>star_border</Icon>}
                        ></TextInput>

                        <TextInput
                            name="phone"
                            icon={<Icon>local_phone</Icon>}
                            label="Your Phone"
                        ></TextInput>
                        <Textarea
                            icon={<Icon>mode_edit</Icon>}
                            name="message"
                            label="Your Message"
                        ></Textarea>
                        <Button
                            large
                            node="button"
                            waves="light"
                            className=" pink lighten-2"
                        >
                            Submit
                            <Icon right>send</Icon>
                        </Button>
                    </form>
                </div>
            </Container>
        </>
        // <div className="contact">
        //     <h2
        //         className="contact-heading
        //     "
        //     >
        //         Contact information
        //     </h2>
        //     <div className="contact-container">
        //         <a href="tel:841626877775" className="contact-item">
        //             <div className="contact-icon">
        //                 <img src="/assets/img/contact/phone.svg" alt="" />
        //             </div>
        //             <div className="contact-info">+841626877775</div>
        //         </a>
        //         <a href="mailto:someone@example.com" className="contact-item">
        //             <div className="contact-icon">
        //                 <img src="/assets/img/contact/mail.svg" alt="" />
        //             </div>
        //             <div className="contact-info">vobaoduy123@gmail.com</div>
        //         </a>
        //         <a
        //             href="https://www.facebook.com/vobaoduy123"
        //             target="_blank"
        //             className="contact-item"
        //         >
        //             <div className="contact-icon">
        //                 <img src="/assets/img/contact/facebook.svg" alt="" />
        //             </div>
        //             <div className="contact-info">vobaoduy123</div>
        //         </a>
        //     </div>
        // </div>
    );
}
