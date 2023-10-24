import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useTranslation } from "react-i18next";

const NavMenu = () => {
    const { i18n, t } = useTranslation();
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
                        {t("main_nav.home")}
                    </a>
                </li>
                <li>
                    <a
                        href="#work"
                        className="hover:underline"
                        onClick={(e) => scrollTo(e, "#work")}
                    >
                        {t("main_nav.work")}
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className="hover:underline"
                        onClick={(e) => scrollTo(e, "#about")}
                    >
                        {t("main_nav.about")}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
