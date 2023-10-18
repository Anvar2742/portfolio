import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import works from "./../work.json";

const Work = () => {
    return (
        <section data-scroll-section className="pt-28 pb-24" id="work">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-center text-xl uppercase font-bold mb-24 h2">
                    portfolio
                </h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    {works.map((work) => {
                        return (
                            <article
                                key={work.id}
                                className={`bg-[${work.primary_color}] py-16 px-14 cursor-pointer rounded-xl group`}
                            >
                                <figure
                                    className={`rounded-2xl bg-[${work.sec_color}] pt-16 px-14 max-h-80 overflow-hidden`}
                                >
                                    <img
                                        src={work.img}
                                        alt="Booriva - eCommerce site web"
                                        className=" shadow-2xl group-hover:-translate-y-[calc(100%-200px)] transition-transform group-hover:duration-[4s] duration-500 ease-linear"
                                    />
                                </figure>
                                <div>
                                    <h3 className="font-serif text-4xl text-darkBlue mt-8">
                                        {work.title}
                                    </h3>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Work;
