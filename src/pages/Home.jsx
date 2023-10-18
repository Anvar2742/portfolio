import Collab from "../components/Collab";
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
                className="pt-28 pb-24 mx-4 mb-40 bg-[image:var(--hero-bg)] bg-cover bg-no-repeat bg-center flex items-center justify-center flex-col rounded-3xl"
            >
                <div className="max-w-5xl mx-auto px-4">
                    <h1
                        className=" font-serif text-8xl text-darkBlue text-center opacity-0"
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="-3"
                        data-scroll-class="appear"
                        data-scroll-repeat="true"
                    >
                        Salut, c'est Anvar
                    </h1>
                    <p
                        className=" text-5xl text-center mt-4 mb-20 leading-normal"
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="3"
                        data-scroll-class="appear"
                        data-scroll-repeat="true"
                    >
                        Je suis un{" "}
                        <span className=" font-bold font-sans text-orange">
                            développeur frontend
                        </span>{" "}
                        <br /> avec{" "}
                        <span className=" bg-darkBlue text-white py-2 px-4 rounded-full">
                            2+
                        </span>{" "}
                        ans d'expérience
                    </p>
                    <ScrollBtn scrollSrc={scrollHero} href="#work" />
                </div>
            </section>

            <Work />

            <div
                className="flex gap-1 mt-10 overflow-hidden"
                data-scroll-section
            >
                <p className=" text-5xl font-medium sabsolute flex left-0 whitespace-nowrap animate-running">
                    Available for Work | Get in Touch | Available for Work | Get
                    in Touch |
                </p>
                <p className=" text-5xl font-medium sabsolute flex left-0 whitespace-nowrap animate-running">
                    Available for Work | Get in Touch | Available for Work | Get
                    in Touch |
                </p>
            </div>

            <Collab />
        </>
    );
};

export default Home;
