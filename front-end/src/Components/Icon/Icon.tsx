import React from "react";
import "./Icon.css"

export enum IconSize {
    BIG, MEDIUM, SMALL, SMALLER, DEFAULT
}

export default function Icon(
    props : {
        size : IconSize | undefined,
        click : () => void | undefined,
        src : string
    }
    ) {

    let fs = "60px";
    switch(props.size) {
        case IconSize.BIG:
            fs = "75px";
            break;
        case IconSize.MEDIUM:
            fs = "50px";
            break;
        case IconSize.SMALL:
            fs = "30px";
            break;
        case IconSize.SMALLER:
            fs = "20px";
            break;    
        case IconSize.DEFAULT:
        default:
            fs = "100%";
    }

    return (
        <div className="Icon">
            <div onClick={props.click} className={!(props.click === undefined) ? "Clickable" : ""}style={
                {
                    backgroundImage: `url(${props.src})`,
                    height: fs
                }
            }></div>
        </div>
    )
}