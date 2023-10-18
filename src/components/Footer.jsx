import React from "react";
import ScrollBtn from "./ScrollBtn";
import footerBg from "./../assets/footer.jpg";
import toTop from "./../assets/toTop.svg";

const Footer = () => {
    return (
        <footer
            data-scroll-section
            style={{
                "--footer-bg": `url(${footerBg})`,
            }}
            className="pt-28 pb-24 bg-[image:var(--footer-bg)] bg-cover bg-no-repeat bg-center overflow-hidden relative text-white"
        >
            <div className="maxW-5xl mx-auto px-4">
                <ScrollBtn scrollSrc={toTop} href="#header" isTop={true} />
            </div>
        </footer>
    );
};

export default Footer;
