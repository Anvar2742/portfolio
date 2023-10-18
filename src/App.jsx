import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import ScrollSmooth from "./components/ScrollSmooth";

function App() {
    return (
        <ScrollSmooth>
            <BrowserRouter basename="/portfolio">
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ScrollSmooth>
    );
}

export default App;
