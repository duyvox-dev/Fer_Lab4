import style from "./App.css";
import { createContext, useContext, useEffect, useState } from "react";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main.jsx";
const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    // useEffect(() => {
    //     console.log(theme);
    // }, [theme]);
    return (
        <ThemeContext.Provider value={theme}>
            <div className={`${theme} App`}>
                <Navbar toggleTheme={toggleTheme} />

                <Main></Main>
                <Footer></Footer>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
