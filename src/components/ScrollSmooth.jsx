import React, { useState, useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";

const SmoothScroll = ({ children }) => {
    const [height, setHeight] = useState(window.innerHeight);
    const viewportRef = useRef(null);

    const ro = new ResizeObserver((elements) => {
        for (let elem of elements) {
            const crx = elem.contentRect;
            // console.log(crx);
            setHeight(crx.height);
        }
    });

    const onScroll = () => {
        gsap.to(viewportRef.current, {
            duration: 1,
            y: -window.scrollY,
            ease: Power4.easeOut,
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        ro.observe(viewportRef.current);

        return () => {
            window.removeEventListener("scroll", onScroll);
            ro.disconnect();
        };
    }, []);

    return (
        <>
            <div className="viewport" ref={viewportRef}>
                {children}
            </div>
            <div
                // ref={(ref) => (this.fake = ref)}
                style={{
                    height,
                }}
            />
        </>
    );
};

export default SmoothScroll;
