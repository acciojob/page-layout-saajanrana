import React from "react";
import './../styles/App.css';

const App = (props) => {
    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.children}</p>
            <h3>{props.footer}</h3>
        </div>
    )
}

export default App