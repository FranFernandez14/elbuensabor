import React from "react";
import "./Text.css"
import { TextSize } from "./TextSize";

export default function Text(
    props : {
        fontSize : TextSize | undefined, 
        link : string | null,
        children : React.ReactNode,
        underline ?: boolean
    }
    ) {

    let fs = "60px";
    switch(props.fontSize) {
        case TextSize.BIG:
            fs = "75px";
            break;
        case TextSize.MEDIUM:
            fs = "50px";
            break;
        case TextSize.SMALLER:
            fs = "20px";
            break;
        case TextSize.SMALL:
        default:
            fs = "30px";

    }

    return (
        <div className={"Text " + (!(props.link === null) ? "Link" : "")} style={
            {
                fontSize: fs
            }
        }>
            <div>
                {!(props.link === null) ? (
                    <a className={"Link " + ((typeof props.underline !== "undefined" && !props.underline) ? "NotUnderlined" : "")} href={props.link}>   
                        {props.children}
                    </a>
                ) : (
                    <>
                        {props.children}
                    </>
                )}
                
            </div>
        </div>
    )
}