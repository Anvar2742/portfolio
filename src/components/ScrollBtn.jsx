import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

const ScrollBtn = ({ scrollSrc, href, isTop }) => {
    gsap.registerPlugin(ScrollToPlugin);
    const scrollTo = (e, href) => {
        e.preventDefault();

        gsap.to(window, {
            scrollTo: href,
            duration: 1,
        });
    };

    return (
        <a
            href={href}
            className="relative w-32 h-32 sm:w-52 sm:h-52 flex items-center justify-center mx-auto group"
            onClick={(e) => scrollTo(e, href)}
        >
            <img
                src={scrollSrc}
                className=" animate-reverse-spin absolute top-0 left-0 w-full"
            />
            <svg
                viewBox="0 0 24 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-10 sm:w-6 sm:h-12 ${
                    isTop ? "rotate-180" : ""
                }`}
            >
                <path
                    d="M1.0459 39.7873L12.0459 51.0693L23.0459 39.7873M12.0459 49.5024V1.06934"
                    stroke={`${isTop ? "white" : "#242F65"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </a>
    );
};

export default ScrollBtn;
