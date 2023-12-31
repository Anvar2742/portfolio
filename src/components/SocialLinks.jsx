import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
} from "@tabler/icons-react";
import React from "react";

const SocialLinks = ({ isPC }) => {
    return (
        <div className={`gap-2 flex`}>
            <a
                href="https://github.com/Anvar2742"
                target="_blank"
                className="group"
            >
                <IconBrandGithub className="group-hover:-translate-y-1 transition-transform w-7 h-7 sm:w-6 sm:h-6" />
            </a>
            <a
                href="https://www.linkedin.com/in/anvar-musaev/"
                target="_blank"
                className="group"
            >
                <IconBrandLinkedin className="group-hover:-translate-y-1 transition-transform w-7 h-7 sm:w-6 sm:h-6" />
            </a>
            <a
                href="https://twitter.com/AnvarMusa27"
                target="_blank"
                className="group"
            >
                <IconBrandX className="group-hover:-translate-y-1 transition-transform w-7 h-7 sm:w-6 sm:h-6" />
            </a>
        </div>
    );
};

export default SocialLinks;
