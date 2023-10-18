import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { Link } from "react-router-dom";

const Navbar = () => {
    gsap.registerPlugin(ScrollToPlugin);
    const scrollTo = (e, href) => {
        e.preventDefault();

        gsap.to(window, {
            scrollTo: href,
            duration: 1,
        });
    };

    return (
        <header className="py-5" id="header" data-scroll-section>
            <div className="maxW-5xl mx-auto px-6 xs:flex items-center justify-between gap-1">
                <div className="flex items-center justify-between">
                    <Link
                        to={"/"}
                        className="text-3xl font-extrabold whitespace-nowrap"
                    >
                        Anvar M.
                    </Link>
                    <div className="flex xs:hidden gap-2">
                        <a
                            href="https://github.com/Anvar2742"
                            target="_blank"
                            className="group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:-translate-y-1 transition-transform"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com/AnvarMusa27"
                            target="_blank"
                            className="group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:-translate-y-1 transition-transform"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="xs:flex xs:justify-end gap-4 xs:w-full">
                    <div className="hidden xs:flex gap-2">
                        <a
                            href="https://github.com/Anvar2742"
                            target="_blank"
                            className="group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:-translate-y-1 transition-transform"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com/AnvarMusa27"
                            target="_blank"
                            className="group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:-translate-y-1 transition-transform"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                            </svg>
                        </a>
                    </div>
                    <nav>
                        <ul className="flex gap-4 xs:mt-0">
                            <li>
                                <a
                                    href="#header"
                                    className="hover:underline"
                                    onClick={(e) => scrollTo(e, "#header")}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#work"
                                    className="hover:underline"
                                    onClick={(e) => scrollTo(e, "#work")}
                                >
                                    Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#cv"
                                    className="hover:underline"
                                    onClick={(e) => scrollTo(e, "#cv")}
                                >
                                    Mon CV
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
