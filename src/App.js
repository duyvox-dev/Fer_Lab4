import style from "./App.css";
import { createContext, useContext, useEffect, useState } from "react";
import { films } from "./shared/ListOfFilms";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import { Routes, Route } from "react-router-dom";
import FilmPresentation from "./components/Films/FilmPresentation";
import Contact from "./components/Contact/Contact";
import Detail from "./components/Detail/Detail";
import News from "./components/News/News";
import About from "./components/About/About";
import { localTheme } from "./utils/localStorageUtil";
const prevTheme = localTheme.getTheme();
const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState(prevTheme === "dark" ? "dark" : "light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
        // console.log(theme);
        localTheme.setTheme(theme);
    }, [theme]);
    useEffect(() => {
        document.title = "Top player";
    }, []);
    return (
        <ThemeContext.Provider value={theme}>
            <div className={`${theme} App`}>
                <NavigationBar toggleTheme={toggleTheme} theme={theme} />
                <Routes>
                    <Route
                        path="/"
                        element={<FilmPresentation films={films} />}
                    ></Route>
                    <Route
                        path="/detail/:id"
                        element={<Detail films={films} />}
                    ></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/news" element={<News />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>

                <Footer></Footer>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
