import React from "react";

function EqualButton(props) {
    return (
        <button className="equal-button" onClick={() => props.onClick(props.value)}>
            =
        </button>
    );
}

export default EqualButton;
