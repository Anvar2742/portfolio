import React from "react";

const About = () => {
    return (
        <section className="pt-28 pb-24" id="cv">
            <div className="max-w-5xl mx-auto px-4" data-scroll-section>
                <h2 className="text-center text-xl uppercase font-bold mb-14 sm:mb-24 h2">
                    About
                </h2>
                <div className="flex flex-col sm:flex-row gap-14 sm:max-h-96">
                    <div>
                        <p className="text-lg">
                            I’m a full stack web developer, over the past 2+
                            years I’ve created well-crafted web sites by
                            connecting business goals with user needs
                            <br />
                            <br />
                            Currently Service and Interaction Designer @ Fraxos
                            office. Recently graduated from UC Berkeley,
                            focusing on Interaction Design & Design Emerging
                            Technology.
                            <br />
                            <br />
                            Formerly at Electronic Arts, Apple, Sea Group,
                            Deutsche Bank and JPMorgan Chase & Co.
                        </p>
                    </div>
                    <div className=" rounded-3xl overflow-hidden">
                        <img
                            src="./../ava_g.jpg"
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
