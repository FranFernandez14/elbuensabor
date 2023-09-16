import React from "react";
import "./Button.css"
import { TextSize } from "../Text/TextSize";
import Text from "../Text/Text";
import { ButtonWidth } from "./ButtonWidth";
import { ButtonColor } from "./ButtonColor";

export default function Button(
    props : {
        children : React.ReactNode,
        click : () => void,
        fontSize : TextSize,
        width : ButtonWidth | string,
        color : ButtonColor
    }
) {

    let bSize : string = "default";
    let bContainerSize : string = "auto";
    let bfAlignItems : string = "center";
    switch (props.width) {
        case ButtonWidth.FILL:
            bfAlignItems = "stretch";
            bContainerSize = "100%";
            break;
        case ButtonWidth.HUG:
            bfAlignItems = "center";
            break;
        default:    
            bSize = props.width;
    }

    let bColor : string;
    switch (props.color) {
        case ButtonColor.LIGHT:
            bColor = "#956A92";
            break;
        case ButtonColor.DARK:
            bColor = "rgba(53, 29, 49, 0.83)";
            break;
        case ButtonColor.ALT:
            bColor = "#F55951";
            break;
    }

    return (
        <div className={"Button"} style={
            {
                alignItems : bfAlignItems,
                width : bContainerSize
            }
        }>
            <button onClick={props.click} style={
                {
                    width: bSize,
                    backgroundColor: bColor
                }
            }>
                <Text fontSize={props.fontSize} link={null}>
                    {props.children}
                </Text>
            </button>
        </div>
    )
}