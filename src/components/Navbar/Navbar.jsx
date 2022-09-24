import React from "react";

export default function Navbar({ toggleTheme = () => {}, theme = {} }) {
    return (
        <div className="navbar_container">
            <nav>
                <ul>
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
