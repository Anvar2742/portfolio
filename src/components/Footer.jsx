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
            className="pt-28 pb-24 bg-[image:var(--footer-bg)] bg-cover bg-no-repeat bg-center overflow-hidden relative"
        >
            <div className="max-w-5xl mx-auto px-4">
                <ScrollBtn scrollSrc={toTop} href="#header" isTop={true} />
                <div className="flex gap-1 mt-10">
                    <p className=" text-5xl font-medium sabsolute flex left-0 whitespace-nowrap animate-running">
                        Available for Work | Get in Touch | Available for Work |
                        Get in Touch | Available for Work | Get in Touch |
                        Available for Work | Get in Touch |
                    </p>
                    <p className=" text-5xl font-medium sabsolute flex left-0 whitespace-nowrap animate-running">
                        Available for Work | Get in Touch | Available for Work |
                        Get in Touch | Available for Work | Get in Touch | 
                        Available for Work | Get in Touch |
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
