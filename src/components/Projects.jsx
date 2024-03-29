import { useState } from "react";
import yettel from "../assets/yettel.png";
import debrecen from "../assets/debrecen.jpg";
import delirest from "../assets/delirest.png";
import albi from "../assets/albi.png";
import webshopai from "../assets/webshopai.png";

const Projects = () => {
    const [menuOption, setMenuOption] = useState(1);
    const workProjects = [
        {
            img: debrecen,
            title: "Debrecen based City Council",
            details:
                "Utilizing Azure, PowerApps Dataflow, and PowerBI, integrating on-premise databases into a unified Data Warehouse, building comprehensive financial and operational reporting. Our primary challenge lays in comprehending SQL queries and seamlessly implementing them into the Power BI ecosystem. Recently, Microsoft introduced a subscription bundle encompassing the technologies I've mentioned. This recognition validates our foresight in identifying this opportunity and successfully implementing it.",
            link: "https://www.debrecen.hu/en",
        },
        {
            img: yettel,
            title: "Yettel Hungary Ltd.",
            details:
                "The project proved compelling as I tackled it solo. Faced with dismal reviews for the mobile application, I leveraged the power of scikit-learn in Python to deploy a classification algorithm. This solution provided invaluable insights into the application's issues, which we promptly addressed. Regrettably, our progress was halted due to insufficient funding to sustain the project further.",
            link: "https://en.yettel.hu/",
        },
        {
            img: yettel,
            title: "Yettel Hungary Ltd.",
            details:
                "Utilized Java Spring Boot to develop a Backend, which is dedicated to extract detailed statistics from our Microservice infrastructure, ensuring efficient data analysis and insights.",
            link: "https://en.yettel.hu/",
        },
        {
            img: delirest,
            title: "Delirest Ltd.",
            details:
                "We've developed an intuitive Admin portal allowing users to seamlessly communicate with restaurants, organize them into groups, manage promotional messages, and effortlessly extract statistics in Excel format.",
            link: "https://delirest.hu/",
        },
    ];
    const homeProjects = [
        {
            img: albi,
            title: "Albi-soft (Startup)",
            details:
                "Together with my friends, we created a startup that focuses on designing and implementing websites. So far we have successfully developed 3 projects. Interestingly, one of them was paid by cryptocurrencies.",
            link: "https://www.albi-soft.hu/",
        },
        {
            img: webshopai,
            title: "WebshopAI (Startup)",
            details:
                "Almost ready to go, the whole object is to make life easier for webshops. On our site they can easily teach a ChatGPT model based on their items. With this model they have a customer support 24/7, only for a small monthly subscription. Once they give their URL, our software scrapes the data, feeds a ChatGPT Assistant with an optimized model and then a few lines of code are created (which they have to implement on their site).",
            link: "https://www.webshopai.hu/",
        },
    ];

    return (
        <div className="text-center xl:w-8/12 mt-20">
            <h2 className="text-2xl font-bold font-mono">Projects</h2>
            <h3 className="text-lg">(Click on image, if you want to)</h3>
            <div className="flex flex-wrap md:flex-nowrap md:space-x-5 w-full mt-10 text-center">
                <div className="flex flex-col mt-10 md:mt-5 w-1/4 ml-auto mr-auto md:ml-0 md:mr-0 md:w-2/12">
                    <button
                        onClick={() => setMenuOption(1)}
                        className="h-10 text-sm rounded-lg text-center bg-black text-white hover:bg-slate-700 xl:text-lg"
                    >
                        Work
                    </button>
                    <button
                        onClick={() => setMenuOption(2)}
                        className="h-10 mt-3 text-sm rounded-lg text-center bg-black text-white hover:bg-slate-700 xl:text-lg"
                    >
                        Other
                    </button>
                </div>
                <div className="flex flex-row flex-wrap justify-center mt-5 md:mt-0 rounded-xl md:w-full">
                    {menuOption === 1
                        ? workProjects.map((project, index) => (
                              <div
                                  key={index}
                                  className="flex flex-col border-2 w-full border-slate-300 rounded-xl p-3 md:w-1/4 mt-5 hover:-translate-y-3 hover:shadow-2xl"
                              >
                                  <div className="flex justify-center">
                                      <a href={project.link}>
                                          <img
                                              className="object-contain h-40 w-40"
                                              src={project.img}
                                          ></img>
                                      </a>
                                  </div>
                                  <div>
                                      <h1 className="text-xl mt-3 font-bold font-mono">
                                          {project.title}
                                      </h1>
                                      <p className="text-base mt-5">
                                          {project.details}
                                      </p>
                                  </div>
                              </div>
                          ))
                        : homeProjects.map((project, index) => (
                              <div
                                  key={index}
                                  className="flex flex-col border-2 w-full border-slate-300 rounded-xl p-3 md:w-1/4 mt-5 hover:-translate-y-3 hover:shadow-2xl"
                              >
                                  <div className="flex justify-center">
                                      <a href={project.link}>
                                          <img
                                              className="object-contain h-40 w-40"
                                              src={project.img}
                                          ></img>
                                      </a>
                                  </div>
                                  <div>
                                      <h1 className="text-xl mt-3 font-bold font-mono">
                                          {project.title}
                                      </h1>
                                      <p className="text-base mt-5">
                                          {project.details}
                                      </p>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </div>
    );
};
export default Projects;
