import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, NavItem, Icon } from "react-materialize";
export default function NavigationBar({ toggleTheme = () => {}, theme = {} }) {
    // const [mobileMenu, setMobileMenu] = useState(false);
    // const toggleMobileMenu = () => {
    //     setMobileMenu(!mobileMenu);
    // };
    return (
        <>
            <Navbar
                alignLinks="right"
                brand={
                    <Link className="brand-logo" to="/">
                        Top Films Ever
                    </Link>
                }
            >
                <ul>
                    <li>
                        <Link to="/">
                            <Icon left>home</Icon>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <Icon left>info_outlined</Icon>
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/news">
                            <Icon left>dvr</Icon>
                            <span>News</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <Icon left>contacts</Icon>
                            <span>Contacts</span>
                        </Link>
                    </li>
                </ul>
            </Navbar>
        </>
        // <div className="navbar_container">
        //     <nav>
        //         <span
        //             className="navbar-menu-btn"
        //             onClick={() => {
        //                 toggleMobileMenu();
        //             }}
        //         >
        //             <FontAwesomeIcon className="" icon={faBars} />
        //         </span>
        //         <ul className={`${mobileMenu ? "menu-mobile-visible" : ""}`}>
        //             <li>
        //                 <NavLink
        //                     to="/"
        //                     className={({ isActive }) =>
        //                         isActive ? "active" : ""
        //                     }
        //                 >
        //                     Home
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink
        //                     to="/news"
        //                     className={({ isActive }) =>
        //                         isActive ? "active" : ""
        //                     }
        //                 >
        //                     News
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink
        //                     to="/about"
        //                     className={({ isActive }) =>
        //                         isActive ? "active" : ""
        //                     }
        //                 >
        //                     About
        //                 </NavLink>
        //             </li>
        //             <li>
        //                 <NavLink
        //                     to="/contact"
        //                     className={({ isActive }) =>
        //                         isActive ? "active" : ""
        //                     }
        //                 >
        //                     Contact
        //                 </NavLink>
        //             </li>
        //         </ul>
        //     </nav>
        //     <div className="theme-switch">
        //         <span className="theme-value">Light</span>
        //         <label className="switch">
        //             <input
        //                 type="checkbox"
        //                 onClick={() => {
        //                     toggleTheme();
        //                 }}
        //                 defaultChecked={theme === "dark" ? true : false}
        //             />
        //             <span className="slider round"></span>
        //         </label>
        //         <span className="theme-value">Dark</span>
        //     </div>
        // </div>
    );
}
