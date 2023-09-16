import React from "react";
import "./Content.css"

export default function Content(
    props : {
        children : React.ReactNode
    }
    ) {
    return (
        <div className="Content">
            {props.children}
        </div>
    );
}