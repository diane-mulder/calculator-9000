import React from "react";

function ResetButton(props) {
    return (
        <button className="reset-button" onClick={() => props.onClick(props.value)}>
            AC
    </button>
    );
}

export default ResetButton;