import style from "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main.jsx";
function App() {
    return (
        <div className="App">
            <Navbar />

            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
