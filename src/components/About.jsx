import React from "react";

const About = () => {
    return (
        <section className="pt-28 pb-24 bg-grayBlue mb-16" id="about">
            <div className="max-w-5xl mx-auto px-4" data-scroll-section>
                <h2 className="text-center text-xl uppercase font-bold mb-14 sm:mb-24 h2">
                    À propos
                </h2>
                <div className="flex flex-col sm:flex-row gap-14">
                    <div className="sm:w-3/5">
                        <p className="text-lg mb-7">
                            Je suis un développeur web fullstack avec{" "}
                            <span className="bg-darkBlue text-white rounded-full px-2 inline-block">
                                plus de 2 ans
                            </span>
                            d'expérience pratique. Je possède une solide
                            compréhension des principes de développement web,
                            utilisant un large éventail de technologies, de
                            frameworks et d'outils de programmation pour créer
                            des sites web conviviaux et réactifs.
                            <br /> <br />
                            Fort d'une expérience dans la réalisation de projets
                            de haute qualité, je maîtrise la conception UI/UX,
                            les technologies côté client telles que HTML, CSS et
                            JavaScript, ainsi que les technologies côté serveur
                            telles que Node.js et PHP.
                        </p>
                        <a
                            href="./CV.pdf"
                            target="_blank"
                            className="mx-auto py-4 px-11 inline-flex items-center justify-center gap-1 text-white bg-orange rounded-xl font-bold  transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            Ouvrir le CV
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.6441 10.906L11.7551 1.14883L2.00151 1.43673M10.6572 2.26684L1.2451 11.8512"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className=" rounded-3xl overflow-hidden sm:w-2/5">
                        <img
                            src="./../ava_g.webp"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
