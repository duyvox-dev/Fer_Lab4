import React from "react";

export default function Navbar() {
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
        </div>
    );
}
