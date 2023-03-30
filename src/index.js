import React from "react";
import ReactDOMClient from "react-dom/client"; // Linha 1 e 2 servem para linkar esse arquivo ao index.html na pasta 'public'.

import App from "./App";
import "./index.css";

ReactDOMClient.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
,); // Essa id 'root' é uma div na index.html onde toda a aplicação estará.