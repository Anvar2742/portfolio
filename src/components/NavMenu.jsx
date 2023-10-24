import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

const NavMenu = () => {
    gsap.registerPlugin(ScrollToPlugin);
    const scrollTo = (e, href) => {
        e.preventDefault();

        gsap.to(window, {
            scrollTo: href,
            duration: 1,
        });
    };
    return (
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
                        href="#about"
                        className="hover:underline"
                        onClick={(e) => scrollTo(e, "#about")}
                    >
                        À propos
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
