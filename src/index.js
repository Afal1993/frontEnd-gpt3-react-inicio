import React from "react";
import ReactDOM from "react-dom"; // Linha 1 e 2 servem para linkar esse arquivo ao index.html na pasta 'public'.

import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById('root')); // Essa id 'root' é uma div na index.html onde toda a aplicação estará.