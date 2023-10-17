import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function App() {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    });

    return (
        <ReactLenis
            root
            // options={{
            //     gestureOrientataion: "both",
            // }}
        >
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ReactLenis>
    );
}

export default App;
