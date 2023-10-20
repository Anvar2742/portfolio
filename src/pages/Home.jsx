import Collab from "../components/Collab";
import ContactInfo from "../components/ContactInfo";
import ScrollBtn from "../components/ScrollBtn";
import Work from "../components/Work";
import heroBg from "./../assets/hero-bg.png";
import scrollHero from "./../assets/hero-scroll.svg";

const Home = () => {
    return (
        <>
            <section
                data-scroll-section
                style={{
                    "--hero-bg": `url(${heroBg})`,
                }}
                className=" pt-20 pb-16 sm:pt-28 sm:pb-24 mx-4 mb-16 sm:mb-40 bg-[image:var(--hero-bg)] bg-cover bg-no-repeat bg-center flex items-center justify-center flex-col rounded-3xl"
            >
                <div className="maxW-5xl mx-auto px-4">
                    <h1 className=" font-serif text-4xl sm:text-8xl text-darkBlue text-center">
                        Salut, c'est Anvar
                    </h1>
                    <p className="sm:leading-normal text-xl sm:text-5xl text-center mt-4 mb-20">
                        Je suis{" "}
                        <span className=" font-bold font-sans text-orange">
                            développeur fullstack
                        </span>{" "}
                        <br /> avec{" "}
                        <span className=" bg-darkBlue text-white py-1 sm:py-2 px-2 sm:px-4 rounded-full">
                            2+
                        </span>{" "}
                        ans d'expérience
                    </p>
                    <ScrollBtn scrollSrc={scrollHero} href="#work" />
                </div>
            </section>

            <Work />

            <div className="flex gap-1 mt-10 overflow-hidden">
                <p className="text-2xl sm:text-5xl font-medium sabsolute flex left-0 whitespace-nowrap animate-running">
                    Available for Work | Get in Touch | Available for Work | Get
                    in Touch |
                </p>
                <p className="text-2xl sm:text-5xl font-medium sabsolute flex left-0 whitespace-nowrap animate-running">
                    Available for Work | Get in Touch | Available for Work | Get
                    in Touch |
                </p>
            </div>

            <Collab />

            <ContactInfo />
        </>
    );
};

export default Home;
