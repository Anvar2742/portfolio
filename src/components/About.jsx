import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
    const { i18n, t } = useTranslation();
    return (
        <section className="pt-28 pb-24 bg-grayBlue mb-16" id="about">
            <div className="max-w-5xl mx-auto px-4" data-scroll-section>
                <h2 className="text-center text-xl uppercase font-bold mb-14 sm:mb-24 h2">
                    {t("home.about.title")}
                </h2>
                <div className="flex flex-col sm:flex-row gap-14">
                    <div className="sm:w-3/5">
                        <p className="text-lg mb-7">
                            {t("home.about.jesdfsavec") + " "}
                            <span className="bg-darkBlue text-white rounded-full px-2 inline-block">
                                {t("home.about.pl2ans")}
                            </span>
                            {" " + t("home.about.1p")}
                            <br /> <br />
                            {t("home.about.2p")}
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
