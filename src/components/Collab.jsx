import React from "react";
import collab from "./../assets/collab.jpg";

const Collab = () => {
    return (
        <section className="pt-28 pb-24">
            <div
                style={{
                    "--collab-bg": `url(${collab})`,
                }}
                className="max-w-5xl mx-auto px-4 bg-[image:var(--collab-bg)] bg-cover bg-no-repeat bg-center text-center py-20 rounded-3xl"
            >
                <h2 className=" text-4xl font-semibold font-serif">
                    Have A Project In Mind? Let's Start.
                </h2>
                <p className=" pt-5 pb-9">
                    You're looking for a solid partner for the project that you
                    have in your mind. <br /> Connect with me to make your work
                    easier.
                </p>
                <a
                    href="https://calendly.com/anvar-musaev/30min"
                    target="_blank"
                    className="mx-auto py-4 px-11 inline-flex items-center justify-center gap-1 text-white bg-orange rounded-xl font-bold"
                >
                    Get started
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
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Collab;
