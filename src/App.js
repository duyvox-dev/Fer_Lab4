import style from "./App.css";
import { createContext, useContext, useEffect, useState } from "react";
import { players } from "./shared/ListOfPlayers";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import PlayersPresentation from "./components/Players/PlayersPresentation";
import Contact from "./components/Contact/Contact";
import Detail from "./components/Detail/Detail";
import { localTheme } from "./utils/localStorageUtil";
const prevTheme = localTheme.getTheme();
const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState(prevTheme === "dark" ? "dark" : "light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
        console.log(theme);
        localTheme.setTheme(theme);
    }, [theme]);
    document.title = "Top player";
    return (
        <ThemeContext.Provider value={theme}>
            <div className={`${theme} App`}>
                <Navbar toggleTheme={toggleTheme} theme={theme} />
                <Routes>
                    <Route
                        path="/"
                        element={<PlayersPresentation players={players} />}
                    ></Route>
                    <Route
                        path="/detail/:id"
                        element={<Detail players={players} />}
                    ></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>

                <Footer></Footer>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
