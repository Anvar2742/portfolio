import About from "../components/About";
// import Collab from "../components/Collab";
// import ContactInfo from "../components/ContactInfo";
import Contact from "../components/Contact";
import ScrollBtn from "../components/ScrollBtn";
import Skills from "../components/Skills";
import Work from "../components/Work";
import heroBg from "./../assets/hero-bg.webp";
import scrollHero from "./../assets/hero-scroll.svg";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { i18n, t } = useTranslation();
    return (
        <>
            <section className=" pt-24">
                <div
                    style={{
                        "--hero-bg": `url(${heroBg})`,
                    }}
                    className="pt-20 pb-16 sm:pt-40 sm:pb-24 mx-4 mb-16 sm:mb-40 bg-[image:var(--hero-bg)] bg-cover bg-no-repeat bg-center flex items-center justify-center flex-col rounded-3xl"
                >
                    <div className="maxW-5xl mx-auto px-4">
                        <h1
                            className=" font-serif text-4xl sm:text-8xl text-darkBlue text-center"
                            id="home"
                        >
                            {t("home.title")}
                        </h1>
                        <p className="sm:leading-normal text-xl sm:text-5xl text-center mt-4 mb-20">
                            {t("home.subtitle.ima") + " "}
                            <span className=" font-bold font-sans text-orange">
                                {t("home.subtitle.devFS")}
                            </span>{" "}
                            <br /> {t("home.subtitle.with") + " "}
                            <span className=" bg-darkBlue text-white py-1 sm:py-2 px-2 sm:px-4 rounded-full">
                                2+
                            </span>{" "}
                            {t("home.subtitle.YoE")}
                        </p>
                        <ScrollBtn scrollSrc={scrollHero} href="#work" />
                    </div>
                </div>
            </section>

            <Work />

            <div className="flex gap-1 mt-10 mb-20 overflow-hidden">
                <p className="text-2xl sm:text-5xl font-medium sabsolute flex left-0 whitespace-nowrap animate-running">
                    Available for Work | Get in Touch | Available for Work | Get
                    in Touch |
                </p>
                <p className="text-2xl sm:text-5xl font-medium sabsolute flex left-0 whitespace-nowrap animate-running">
                    Available for Work | Get in Touch | Available for Work | Get
                    in Touch |
                </p>
            </div>

            <About />
            <Skills />
            <Contact />
        </>
    );
};

export default Home;
