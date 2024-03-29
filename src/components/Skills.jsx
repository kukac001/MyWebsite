const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "Frontend Developer",
            details: "I value minimalist, accessible and usable sites.",
            tools: [
                "HTML",
                "CSS",
                "Tailwind CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Angular",
                "Git",
                "Github",
                "Netlify",
                "VSCode",
            ],
            d: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z",
        },
        {
            id: 2,
            name: "Backend Developer",
            details: "Secure, Scalable, Optimized",
            tools: [
                "Java",
                "Spring Tools",
                "Python",
                "MongoDB",
                "MySQL",
                "SQL",
                "Power BI",
            ],
            d: "M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z",
        },
        {
            id: 3,
            name: "To survive in this world",
            details: "Most of the skills I like to enhance",
            tools: [
                "Investing",
                "Reading a lot",
                "Efficiency",
                "Meditation",
                "Working out",
            ],
            d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        },
    ];

    return (
        <article className="flex flex-wrap mt-20 rounded-lg w-full xl:w-8/12 md:justify-center md:space-x-10">
            {skills.map((skill) => (
                <section
                    className="w-full flex flex-col p-5 border-b-2 border-slate-300 text-center items-center hover:border-t-2 md:w-3/12 hover:-translate-y-3 hover:shadow-2xl"
                    key={skill.id}
                >
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
                            d={skill.d}
                        />
                    </svg>

                    <h2 className="text-2xl mt-3 font-bold">{skill.name}</h2>
                    <p className="text-xl mt-3 h-20">{skill.details}</p>
                    <h3 className="text-2xl mt-7 font-mono">Tools</h3>
                    <ul className="flex flex-col text-xl items-center">
                        {skill.tools.map((tool, index) => (
                            <li className="pt-2 font-mono text-xl" key={index}>
                                {tool}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </article>
    );
};
export default Skills;
