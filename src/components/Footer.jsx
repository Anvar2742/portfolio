import React from "react";
import ScrollBtn from "./ScrollBtn";
import footerBg from "./../assets/footer.jpg";
import toTop from "./../assets/toTop.svg";

const Footer = () => {
    return (
        <footer
            style={{
                "--footer-bg": `url(${footerBg})`,
            }}
            className="pt-28 pb-24 bg-[image:var(--footer-bg)] bg-cover bg-no-repeat bg-center"
        >
            <div className="max-w-5xl mx-auto px-4">
                <ScrollBtn scrollSrc={toTop} href="#header" isTop={true} />
            </div>
        </footer>
    );
};

export default Footer;
