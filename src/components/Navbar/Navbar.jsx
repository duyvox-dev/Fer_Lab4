import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

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
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/news"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Contact
                        </NavLink>
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
