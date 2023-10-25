import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const NavMenu = () => {
    const { i18n, t } = useTranslation();
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const menu = [
        {
            id: "home",
            title: t("main_nav.home"),
        },
        {
            id: "work",
            title: t("main_nav.work"),
        },
        {
            id: "about",
            title: t("main_nav.about"),
        },
    ];
    gsap.registerPlugin(ScrollToPlugin);
    const scrollTo = (e, href) => {
        e.preventDefault();

        gsap.to(window, {
            scrollTo: {
                y: href,
                offsetY: 200,
            },
            duration: 1,
        });
    };

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        const height =
            window.innerHeight || document.documentElement.clientHeight;
        return rect.top >= 0 && rect.top + 200 <= height;
    };

    // Function to update the active menu item based on scroll position
    const updateActiveMenuItem = () => {
        menu.forEach((item) => {
            const targetSection = document.getElementById(item.id);
            if (targetSection && isElementInViewport(targetSection)) {
                setActiveMenuItem(item.id);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", updateActiveMenuItem);

        return () => {
            window.removeEventListener("scroll", updateActiveMenuItem);
        };
    }, []);

    return (
        <nav>
            <ul className="flex gap-4 xs:mt-0">
                {menu.map((el) => {
                    return (
                        <li key={el.id}>
                            <a
                                href={`#${el.id}`}
                                className={`hover:underline ${
                                    activeMenuItem === el.id ? "font-bold" : ""
                                }`}
                                onClick={(e) => scrollTo(e, `#${el.id}`)}
                            >
                                {el.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavMenu;
