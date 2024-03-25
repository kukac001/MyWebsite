import "./App.css";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import About from "./components/About";

function App() {
    return (
        <div className="flex flex-col items-center m-3 md:p-8 xl:p-5">
            <Navbar />
            <Greeting />
            <About />
        </div>
    );
}

export default App;
