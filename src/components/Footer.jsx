import React, { useState } from "react";
import ScrollBtn from "./ScrollBtn";
import footerBg from "./../assets/footer.webp";
import toTop from "./../assets/toTop.svg";
import ContactInfo from "./ContactInfo";

const Footer = () => {
    const [isCopied, setIsCopied] = useState();
    const handleCopy = () => {
        navigator.clipboard.writeText("anvarmusa12@gmail.com");
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };
    return (
        <footer
            data-scroll-section
            style={{
                "--footer-bg": `url(${footerBg})`,
            }}
            className="pt-28 pb-24 bg-[image:var(--footer-bg)] bg-cover bg-no-repeat bg-center overflow-hidden relative text-white"
        >
            <div className="max-w-5xl mx-auto px-4">
                <ScrollBtn scrollSrc={toTop} href="#contact" isTop={true} />
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <ContactInfo />
                    <div className="flex flex-col sm:flex-row gap-5 p-5 items-center bg-white rounded-xl">
                        <p className="font-serif">
                            Je serais ravi de discuter de ma candidature
                        </p>
                        <button
                            onClick={handleCopy}
                            className="text-white py-4 px-8 inline-flex items-center justify-center gap-1 bg-customBlack rounded-xl font-bold  transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-orange"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                            </svg>
                            {isCopied ? "C'est fait!" : "Copier Email"}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
