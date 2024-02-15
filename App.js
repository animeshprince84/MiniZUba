import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1>MiniZUba</h1>
);

const HeaderComponent = () => (
    <div id="container">
        <Title/>
        <div className="heading">Welcome to MiniZUba</div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);