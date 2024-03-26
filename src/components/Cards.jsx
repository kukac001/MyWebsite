import growingup from "../assets/growingup.png";
import university from "../assets/university.png";
import professional from "../assets/professional.png";
import currently from "../assets/currently.png";

const Cards = () => {
    const cards = [
        {
            title: "Growing up",
            starter: "Started my journey in a small factory town (Hungary)",
            paragraph:
                "I had a loving and secure upbringing, with full of experiences.",
            img: growingup,
        },
        {
            title: "University",
            starter: "University of Pannonia, BSc in Business Informatics",
            paragraph:
                "At first my grades were awful, I was the tipical student who thought that I don't need to spend time on studying. Gradually, I understood myself better and got the highest bursary.",
            img: university,
        },
        {
            title: "Professional work",
            starter: "Astron Informatics Ltd.",
            paragraph:
                "After graduation, I immediatly started working at Astron Informatics Ltd.",
            img: professional,
        },
        {
            title: "Currently",
            starter: "Working together with my friends",
            paragraph:
                "I am in a lucky positions because I can travel the world, currently living in Montréal, where I do self-improvement (productivity, programming and health). Also, making a lots of new friends.",
            img: currently,
        },
    ];

    return (
        <section className="flex flex-col w-full items-center mt-20 xl:w-8/12 space-y-10">
            <h2 className="text-2xl font-bold font-mono">My story so far</h2>
            {cards.map((card, index) => (
                <div
                    className="flex flex-wrap p-7 w-full top-20 bg-white mt-3 sticky border-2 border-slate-300 rounded-xl"
                    key={index}
                >
                    <div className="flex flex-col mt-auto mb-auto w-full md:w-5/12">
                        <h2 className="text-sm uppercase">{card.title}</h2>
                        <p className="pt-5 text-2xl font-bold">
                            {card.starter}
                        </p>
                        <p className="pt-5 text-base">{card.paragraph}</p>
                    </div>
                    <div className="flex ml-auto pt-5 md:w-5/12">
                        <img src={card.img}></img>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default Cards;
