import capitald from "../assets/capital_d.png";

const Socials = () => {
    return (
        <div className="flex flex-col w-full items-center mt-20 xl:w-8/12 pb-10">
            <img className="w-10" src={capitald}></img>
            <h2 className="text-2xl font-mono mt-5">David Daniel Kozma</h2>
            <p className="mt-10 mb-10 text-lg">
                “The key is not to prioritize what's on your schedule, but to
                schedule your priorities.”
                <span className="italic"> – Thomas Sowell</span>{" "}
            </p>
            <p className="mt-16 text-slate-500">created by me @</p>
        </div>
    );
};
export default Socials;
