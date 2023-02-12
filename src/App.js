import React from "react";

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { Brand, Cta, Navbar } from "./components";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    ) // 1º - Assim que terminar  essa const App, use o comando no terminal 'npm install react-icons', e dps dê 'npm start' para iniciar a aplicação no navegador.
}

export default App;