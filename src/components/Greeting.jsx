import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import NeuralNetwork from "./NeuralNetwork";

const Greeting = () => {
    return (
        <div className="flex flex-wrap items-center mt-20 md:mt-10 md:w-full md:h-96 xl:w-8/12">
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-4/12">
                <h1 className="text-3xl pb-3 font-bold">
                    Welcome to my website!
                </h1>
                <h2 className="text-xl font-mono">David Daniel Kozma</h2>
                <div className="pt-5">
                    <button
                        className="h-10 text-sm rounded-lg text-center pl-2 pr-2 bg-black text-white hover:bg-slate-700 xl:text-lg"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "#connect";
                        }}
                    >
                        Contact
                    </button>
                </div>
            </div>
            <div className="flex h-72 w-11/12 items-center justify-center ml-auto mr-auto p-5 md:p-0 mt-5 md:mr-0 md:ml-auto md:w-7/12 md:h-72">
                <Canvas flat linear camera={{ position: [0, 0, 20] }}>
                    <NeuralNetwork />
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    );
};
export default Greeting;
