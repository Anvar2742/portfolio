import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import NavMenu from "./NavMenu";
import Loader from "./Loader";

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
    }, [location.pathname]);

    // Change the language and handle loading state
    useEffect(() => {
        i18n.changeLanguage(currentLang);
        if (currentLang === i18n.language) {
            setIsLoading(false);
        }
    }, [currentLang]);

    // Render loading state
    if (isLoading) <Loader />;

    // Render the Navbar
    return (
        <header className="py-5" id="header" data-scroll-section>
            <div className="max-w-5xl mx-auto px-6 xs:flex items-center justify-between gap-1">
                <div className="flex items-center justify-between">
                    <Link
                        to={"/"}
                        className="text-3xl font-extrabold whitespace-nowrap"
                    >
                        Anvar M.
                    </Link>
                    <SocialLinks isPC={false} />
                </div>
                <div className="xs:flex xs:justify-end gap-4 xs:w-full">
                    <SocialLinks isPC={true} />
                    <NavMenu />
                </div>
                <div className="ml-2">
                    {LANGUAGES.map(({ code, label }) =>
                        code != currentLang ? (
                            <NavLink
                                className="w-9 flex items-center justify-center text-white bg-customBlack rounded-full py-1 transition-colors hover:bg-orange"
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
            </div>
        </header>
    );
};

export default Navbar;
