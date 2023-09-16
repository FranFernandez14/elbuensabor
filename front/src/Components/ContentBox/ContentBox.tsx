import React from "react";
import "./ContentBox.css"

export default function ContentBox(
    props : {
        children : React.ReactNode,
        width : number
    }
) {
    return (
        <div className="ContentBox" style={
            {
                width : props.width + "%"
            }
        }>
            {props.children}
        </div>
    )
}