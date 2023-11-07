import { useTranslation } from "react-i18next";
import works from "./../work.json";

const Work = () => {
    const { i18n, t } = useTranslation();
    return (
        <section className="pt-28 pb-24">
            <div className="maxW-5xl mx-auto px-4">
                <h2 className="text-center text-xl uppercase font-bold mb-24" id="work">
                    portfolio
                </h2>
                <div className="grid md:grid-cols-2 md:gap-x-8 gap-y-10">
                    {works.map((work) => {
                        const title =
                            i18n.language === "fr" ? work.title : work.title_en;
                        return (
                            <article
                                key={work.id}
                                style={{
                                    "--work-color": work.primary_color,
                                    "--work-color-sec": work.sec_color,
                                }}
                                className={`bg-[var(--work-color)] py-8 sm:py-16 px-4 sm:px-14 rounded-xl group`}
                            >
                                <figure
                                    className={`rounded-2xl bg-[--work-color-sec] pt-8 sm:pt-16 px-6 sm:px-14 max- h-80 overflow-hidden h-fulls`}
                                >
                                    <img
                                        src={work.img}
                                        alt={title}
                                        className="shadow-2xl group-hover:-translate-y-[calc(100%-250px)] sm:group-hover:-translate-y-[calc(100%-200px)] transition-transform group-hover:duration-[4s] duration-500 ease-linear"
                                    />
                                </figure>
                                <h3 className="font-serif text-2xl sm:text-4xl text-darkBlue mt-8 mb-6">
                                    {title}
                                </h3>
                                <a
                                    href={work.link}
                                    target="_blank"
                                    className="mx-auto py-4 px-11 inline-flex items-center justify-center gap-1 text-white bg-orange rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-xl"
                                >
                                    Check it out
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.6441 10.906L11.7551 1.14883L2.00151 1.43673M10.6572 2.26684L1.2451 11.8512"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Work;
