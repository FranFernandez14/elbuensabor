import React from "react";
import "./Text.css"
import { TextSize } from "./TextSize";
import { TextColor } from "./TextColor";

export default function Text(
    props : {
        fontSize ?: TextSize,
        color ?: TextColor, 
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

    let c = "#F1E8E6";
    switch(props.color) {
        case TextColor.LIGHTER:
        case TextColor.DEFAULT:
        default:
            c = "#F1E8E6";
            break;
        case TextColor.LIGHT:
            c = "#956A92";
            break;
        case TextColor.DARK:
            c = "rgb(53, 29, 49)";
            break;
        case TextColor.ALT:
            c = "#f55951";
            break;
    }

    return (
        <div className={"Text " + (!(props.link === null) ? "Link " : " ") + fs} style={
            {
                color: c
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