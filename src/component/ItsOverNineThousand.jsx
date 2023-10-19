import React from "react";


function ItsOverNineThousand(props) {
    if (props.value > 9000) {
        return <div className="over-9000"><iframe src="src/img/Custom-Made Annabelle Doll - GIPHY Clips_files/200w.gif" width="200" height="200" allowFullScreen></iframe></div>
    } else {
        return null;
    }
}

export default ItsOverNineThousand;