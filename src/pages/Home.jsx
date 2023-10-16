import ScrollBtn from "../components/ScrollBtn";
import Work from "../components/Work";
import heroBg from "./../assets/hero-bg.png";
import scrollHero from "./../assets/hero-scroll.svg";

const Home = () => {
    return (
        <>
            <section
                style={{
                    "--hero-bg": `url(${heroBg})`,
                }}
                className="pt-28 pb-24 mx-4 mb-40 bg-[image:var(--hero-bg)] bg-cover bg-no-repeat bg-center flex items-center justify-center flex-col rounded-3xl"
            >
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className=" font-serif text-8xl text-darkBlue text-center">
                        Hi, I'm Anvar
                    </h1>
                    <p className=" text-5xl text-center mt-4 mb-20 leading-normal">
                        a{" "}
                        <span className=" font-bold font-sans text-orange">
                            Web developer
                        </span>{" "}
                        <br /> with{" "}
                        <span className=" bg-darkBlue text-white py-2 px-4 rounded-full">
                            2+
                        </span>{" "}
                        years of experience
                    </p>
                    <ScrollBtn scrollSrc={scrollHero} href="#work" />
                </div>
            </section>

            <Work />
        </>
    );
};

export default Home;
