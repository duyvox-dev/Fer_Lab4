import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ toggleTheme = () => {}, theme = {} }) {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };
    return (
        <div className="navbar_container">
            <nav>
                <span
                    className="navbar-menu-btn"
                    onClick={() => {
                        toggleMobileMenu();
                    }}
                >
                    <FontAwesomeIcon className="" icon={faBars} />
                </span>
                <ul className={`${mobileMenu ? "menu-mobile-visible" : ""}`}>
                    <li>
                        <a href="#" className="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            News
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="theme-switch">
                <span className="theme-value">Light</span>
                <label className="switch">
                    <input
                        type="checkbox"
                        onClick={() => {
                            toggleTheme();
                        }}
                        defaultChecked={theme === "dark" ? true : false}
                    />
                    <span className="slider round"></span>
                </label>
                <span className="theme-value">Dark</span>
            </div>
        </div>
    );
}
