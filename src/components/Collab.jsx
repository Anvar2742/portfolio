import React from "react";
import collab from "./../assets/collab.jpg";
import CV from "./../assets/CV.pdf";

const Collab = () => {
    return (
        <section className="pt-28 pb-24" id="cv">
            <div className="maxW-5xl mx-auto px-4" data-scroll-section>
                <div
                    style={{
                        "--collab-bg": `url(${collab})`,
                    }}
                    className="bg-[image:var(--collab-bg)] bg-cover bg-no-repeat bg-center text-center py-14 sm:py-20 px-4 rounded-3xl"
                >
                    <h2 className=" text-4xl font-semibold font-serif mb-5">
                        Plus d'informations
                    </h2>
                    {/* <p className="mb-9">
                        Plus d'informations sur mon expérience et mes
                        compétences
                    </p> */}
                    <a
                        href={CV}
                        target="_blank"
                        className="mx-auto py-4 px-11 inline-flex items-center justify-center gap-1 text-white bg-orange rounded-xl font-bold"
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
            </div>
        </section>
    );
};

export default Collab;
