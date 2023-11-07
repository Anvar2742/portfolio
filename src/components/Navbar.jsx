import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import NavMenu from "./NavMenu";
import Loader from "./Loader";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useRef } from "react";

const LANGUAGES = [
    { label: "En", code: "en" },
    { label: "Fr", code: "fr" },
];

const Navbar = () => {
    const { i18n, t } = useTranslation();
    const { lang } = useParams();
    const location = useLocation();
    const [currentLang, setCurrentLang] = useState("fr");
    const [isLoading, setIsLoading] = useState(true);
    const [isMenu, setIsMenu] = useState(false);
    const menuOpen = useRef();
    // const menuRef = useRef();

    // Update HTML attribute for language
    i18n.on("languageChanged", (lng) => {
        document.documentElement.setAttribute("lang", lng);
    });

    // Check if a language is specified in the URL, set the currentLang state
    useEffect(() => {
        if (lang) {
            setCurrentLang(lang);
        } else {
            setCurrentLang("fr");
        }
    }, [location.pathname, lang]);

    // Change the language and handle loading state
    useEffect(() => {
        i18n.changeLanguage(currentLang);
        if (currentLang === i18n.language) {
            setIsLoading(false);
        }
    }, [currentLang]);

    const handleMenu = (e) => {
        if (
            menuOpen.current.contains(e.target) ||
            e.target === menuOpen.current
        ) {
            setIsMenu(true);
        } else {
            setIsMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleMenu);

        return () => {
            document.removeEventListener("click", handleMenu);
        };
    }, []);

    // Render loading state
    if (isLoading) <Loader />;

    // Render the Navbar
    return (
        <>
            <header className="py-5 fixed w-full bg-white shadow-sm z-30">
                <div className="max-w-5xl mx-auto px-6 sm:flex items-center justify-between gap-1">
                    <div className="flex items-center justify-between">
                        <Link
                            to={"/"}
                            className="text-3xl font-extrabold whitespace-nowrap"
                        >
                            Anvar M.
                        </Link>
                        <button className="sm:hidden " ref={menuOpen}>
                            <IconMenu />
                        </button>
                    </div>
                    {isMenu ? (
                        <div className="sm:hidden w-screen h-screen bg-black bg-opacity-20 fixed top-0 left-0 z-40"></div>
                    ) : (
                        ""
                    )}
                    <div
                        className={`flex sm:flex-row flex-col sm:items-center justify-end gap-4 fixed sm:static top-0 right-0 bg-white sm:bg-none h-screen sm:h-auto w-1/2 sm:w-full p-10 sm:p-0 transition-all z-50 ${
                            isMenu
                                ? "translate-x-0"
                                : "sm:translate-x-0 translate-x-full"
                        }`}
                    >
                        <NavMenu />
                        <SocialLinks />
                        <div className="sm:ml-2">
                            {LANGUAGES.map(({ code, label }) =>
                                code != currentLang ? (
                                    <NavLink
                                        className="w-11 sm:w-9 flex text-xl sm:text-base items-center justify-center text-white bg-customBlack rounded-full py-1 transition-colors hover:bg-orange"
                                        key={code}
                                        to={code !== "fr" ? code : "/"}
                                    >
                                        {label}
                                    </NavLink>
                                ) : (
                                    ""
                                )
                            )}
                        </div>

                        <button className="sm:hidden bg-red-400 w-10 h-10 flex items-center justify-center rounded-full self-end mt-10">
                            <IconX color="white" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
