import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

const MainLayout = () => {
    const location = useLocation();
    const containerRef = useRef(null);

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
            }}
            watch={[location.pathname]}
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </LocomotiveScrollProvider>
    );
};

export default MainLayout;
