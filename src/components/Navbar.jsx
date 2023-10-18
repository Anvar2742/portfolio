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
            <div className="max-w-5xl mx-auto px-6 xs:flex items-center justify-between">
                <Link to={"/"} className="text-3xl font-extrabold">
                    Anvar M.
                </Link>
                <nav>
                    <ul className="flex gap-4 mt-3 xs:mt-0">
                        <li>
                            <a
                                href="#header"
                                className=""
                                onClick={(e) => scrollTo(e, "#header")}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#work"
                                className=""
                                onClick={(e) => scrollTo(e, "#work")}
                            >
                                Work
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className=""
                                onClick={(e) => scrollTo(e, "#contact")}
                            >
                                Get in touch
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
