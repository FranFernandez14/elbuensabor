import React from "react";
import "./Text.css"
import { TextSize } from "./TextSize";
import { TextColor } from "./TextColor";
import { TextAlign } from "./TextAlign";
import { Property } from "csstype";

export default function Text(
    props : {
        fontSize ?: TextSize,
        color ?: TextColor, 
        link ?: string | null,
        children : React.ReactNode,
        underline ?: boolean,
        align ?: TextAlign
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

    let a = "left";
    switch(props.align) {
        case TextAlign.LEFT:
        default:
            a = "left";
            break;
        case TextAlign.RIGHT:
            a = "right";
            break;
        case TextAlign.CENTER:
            a = "center";
            break;
        case TextAlign.JUSTIFY:
            a = "justify";
            break;
    }

    return (
        <div className={"Text " + (!(props.link === null) ? "Link " : " ") + fs} style={
            {
                color: c
            }
        }>
            <div style={{textAlign: a as Property.TextAlign}}>
                {(props.link !== null && props.link !== undefined) ? (
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