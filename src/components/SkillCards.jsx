import skills from "./../skills.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

const SkillCards = () => {
    gsap.registerPlugin(ScrollTrigger);
    return (
        <div className="grid gap-10 px-5">
            {skills.skills_cards.map((skill, i) => {
                const [isActive, setIsActive] = useState(false);
                const skillRef = useRef();
                useEffect(() => {
                    if (skillRef.current) {
                        ScrollTrigger.create({
                            trigger: skillRef.current,
                            start: "top 30%",
                            onEnter: () => {
                                setIsActive(true);
                            },
                            onLeaveBack: () => {
                                setIsActive(false);
                            },
                        });
                    }
                }, [skillRef.current]);

                return (
                    <div
                        key={skill.id}
                        ref={skillRef}
                        className={`skill-card cursor-pointer select-none before:bg-c-gray-200 relative p-6 before:border-2 before:border-c-gray-400 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:transition-transform before:origin-center ${
                            isActive
                                ? i % 2 === 0
                                    ? "before:rotate-3 before:translate-y-2"
                                    : "before:-rotate-3"
                                : ""
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
    );
};

export default SkillCards;
