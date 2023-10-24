import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GoogleReCaptchaProvider
            reCaptchaKey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
        >
            <App />
        </GoogleReCaptchaProvider>
    </React.StrictMode>
);
