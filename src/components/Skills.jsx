import skills from "./../skills.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import SkillCards from "./SkillCards";

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
                                    key={i}
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
                    <SkillCards />
                </div>
            </div>
        </section>
    );
};

export default Skills;
