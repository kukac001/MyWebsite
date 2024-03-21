import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const linksMobile = [
        {
            link: "https://stackoverflow.com/questions/26086515/css-flex-how-to-display-one-item-on-first-line-and-two-on-the-next-line",
            name: "Home",
            d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
        },
    ];
    const links = [
        {
            name: "Home",
        },
        {
            name: "About",
        },
        {
            name: "Contact",
        },
    ];

    return (
        <div className="flex flex-row w-full border-b-2 border-slate-100 xl:w-8/12">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 md:w-16 md:h-16"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                    />
                </svg>
            </div>
            <div className="hidden pl-10 md:flex md:flex-row items-center h-auto">
                {links.map((link) => (
                    <div className="pl-4">
                        <p>{link.name}</p>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-end ml-auto">
                <button className="h-12 rounded-lg text-center p-3 bg-black text-white hover:bg-slate-700">
                    Send and e-mail
                </button>
            </div>
            <div className="flex-col w-full md:hidden">
                <div className="flex justify-end w-full items-center">
                    <div>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex ml-auto pt-5 w-2/4 justify-end">
                    {isMenuOpen && (
                        <div>
                            <nav>
                                <ul>
                                    {linksMobile.map((link) => (
                                        <div>
                                            <a
                                                href={link.link}
                                                className="flex flex-row items-center"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d={link.d}
                                                    />
                                                </svg>
                                                <p className="pl-3">
                                                    {link.name}
                                                </p>
                                            </a>
                                        </div>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Navbar;
