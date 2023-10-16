import React from "react";

const ScrollBtn = ({ scrollSrc, href, isTop }) => {
    return (
        <a
            href={href}
            className="relative w-52 h-52 flex items-center justify-center mx-auto group"
        >
            <img
                src={scrollSrc}
                className=" animate-reverse-spin absolute top-0 left-0 w-full"
            />
            <svg
                width="24"
                height="52"
                viewBox="0 0 24 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${isTop ? "rotate-180" : ""}`}
            >
                <path
                    d="M1.0459 39.7873L12.0459 51.0693L23.0459 39.7873M12.0459 49.5024V1.06934"
                    stroke="#242F65"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </a>
    );
};

export default ScrollBtn;
