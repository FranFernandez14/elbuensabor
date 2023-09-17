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
            fs = "big";
            break;
        case TextSize.MEDIUM:
            fs = "medium";
            break;
        case TextSize.SMALLER:
            fs = "smaller";
            break;
        case TextSize.SMALL:
        default:
            fs = "small";

    }

    return (
        <div className={"Text " + (!(props.link === null) ? "Link " : " ") + fs}>
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