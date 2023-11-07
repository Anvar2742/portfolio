import skills from "./../skills.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import SkillCards from "./SkillCards";
import { useTranslation } from "react-i18next";

const Skills = ({ pageWrap }) => {
    const { i18n, t } = useTranslation();
    gsap.registerPlugin(ScrollTrigger);
    const skillWrap = useRef();
    const skillIcons = useRef();

    useLayoutEffect(() => {
        let mm = gsap.matchMedia(pageWrap.current);
        mm.add("(min-width: 640px)", () => {
            ScrollTrigger.create({
                trigger: "#skillWrap",
                start: "top 30%",
                end: "bottom 50%+=100px",
                pin: ".c-sticky",
                // markers: true,
            });
        });
        return () => mm.revert();
    }, []);

    return (
        <section
            className="pt-28 pb-24 mb-16 overflow-hidden"
            id="skills"
            ref={skillWrap}
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-center text-xl uppercase font-bold mb-14 sm:mb-24 h2">
                    {t("home.skills.title")}
                </h2>
                <div
                    className="grid sm:grid-cols-2 gap-y-20 smgap-4 items-start"
                    id="skillWrap"
                >
                    <div
                        className="relative w-full grid xs:grid-cols-3 grid-cols-2 auto-rows-min gap-10 c-sticky pl-6 sm:pl-0 pr-2 xs:pr-0"
                        ref={skillIcons}
                    >
                        {skills.skills_icons.map((icon, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`w-18 h-18 flex items-center justify-center ${
                                        i > 5
                                            ? " sm:translate-x-3 translate-x-6"
                                            : i > 2
                                            ? ""
                                            : " sm:translate-x-6 translate-x-10"
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
