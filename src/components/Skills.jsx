import skills from "./../skills.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";

const Skills = () => {
    gsap.registerPlugin(ScrollTrigger);
    const skillWrap = useRef();
    const skillIcons = useRef();
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: "#skillWrap",
                start: "top 30%",
                end: "bottom 50%+=100px",
                pin: ".c-sticky",
                // markers: true,
            });
        }, skillWrap);
        return () => ctx.revert();
    }, []);

    return (
        <section className="pt-28 pb-24 mb-16" id="skills" ref={skillWrap}>
            <div className="max-w-5xl mx-auto px-4" data-scroll-section>
                <h2 className="text-center text-xl uppercase font-bold mb-14 sm:mb-24 h2">
                    Competences
                </h2>
                <div className="grid grid-cols-2 items-start" id="skillWrap">
                    <div
                        className="relative w-full grid grid-cols-3 auto-rows-min gap-10 c-sticky"
                        ref={skillIcons}
                    >
                        {skills.skills_icons.map((icon, i) => {
                            return (
                                <div
                                    key={icon.id}
                                    className={`w-18 h-18 flex items-center justify-center ${
                                        i > 5
                                            ? " translate-x-3"
                                            : i > 2
                                            ? ""
                                            : " translate-x-6"
                                    }`}
                                >
                                    <img
                                        className={`w-full h-full`}
                                        src={icon.src}
                                        alt={icon.alt}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="grid gap-10 px-5">
                        {skills.skills_cards.map((skill, i) => {
                            return (
                                <div
                                    key={skill.id}
                                    className={`cursor-pointer select-none before:bg-c-gray-200 relative p-6 before:border-2 before:border-c-gray-400 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:transition-transform before:origin-center ${
                                        i % 2 === 0
                                            ? "before:rotate-2 before:translate-y-2"
                                            : "before:-rotate-2"
                                    }
                                    hover:before:rotate-0 hover:before:translate-y-0`}
                                >
                                    <p className="text-xl font-bold opacity-70 z-10 relative">
                                        {i + 1}
                                    </p>
                                    <h3 className=" text-2xl font-bold z-10 relative">
                                        {skill.title}
                                    </h3>
                                    <p className="text-sm mt-2 z-10 relative">
                                        {skill.subtitle}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
