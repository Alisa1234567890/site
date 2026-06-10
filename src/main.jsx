import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const params = new URLSearchParams(window.location.search);
if (params.has('p')) {
    const path = params.get('p');
    window.history.replaceState(null, null, '/site' + path + (params.has('q') ? '?' + params.get('q') : '') + window.location.hash);
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename="/site">
            <App />
        </BrowserRouter>
    </StrictMode>
);