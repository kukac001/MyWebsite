import "./App.css";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import About from "./components/About";
import Skills from "./components/Skills";
import Cards from "./components/Cards";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="flex flex-col items-center w-full p-3 md:p-8 xl:p-5">
            <Navbar />
            <Greeting />
            <About />
            <Skills />
            <Cards />
            <Projects />
        </div>
    );
}

export default App;
