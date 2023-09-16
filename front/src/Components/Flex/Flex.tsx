import React from "react";
import "./Flex.css"
import { FlexDirection } from "./FlexDirection";
import { FlexAlign } from "./FlexAlign";

export default function Flex(
    props : {
        children : React.ReactNode,
        direction : FlexDirection,
        align : FlexAlign
    }
) {
    let c : string = "Row";
    switch (props.direction) {
        case FlexDirection.ROW:
            c = "Row";
            break;
        case FlexDirection.COLUMN:
            c = "Column";
            break;
        case FlexDirection.WRAP:
            c = "Wrap";
            break;
    }

    let jc : string = "left";
    switch (props.align) {
        case FlexAlign.START:
            jc = "flex-start";
            break;
        case FlexAlign.CENTER:
            jc = "center";
            break;
        case FlexAlign.END:
            jc = "flex-end";
            break;
        case FlexAlign.EXTREMES:
            jc = "space-between";
            break;
    }

    return (
        <div className={"Flex " + c} style={
            {
                justifyContent: jc
            }
        }>
            {props.children}
        </div>
    )
}