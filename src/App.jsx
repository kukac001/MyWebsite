import "./App.css";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import About from "./components/About";
import Skills from "./components/Skills";
import Cards from "./components/Cards";

function App() {
    return (
        <div className="flex flex-col items-center m-3 md:p-8 xl:p-5">
            <Navbar />
            <Greeting />
            <About />
            <Skills />
            <Cards />
        </div>
    );
}

export default App;
