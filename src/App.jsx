import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/:lang" element={<Home />} />
                    <Route path="*" element={404} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
