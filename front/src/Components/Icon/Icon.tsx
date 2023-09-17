import "./Icon.css"
import { IconSize } from "./IconSize";

export default function Icon(
    props : {
        size : IconSize | undefined,
        click ?: () => void | undefined,
        src : string
    }
    ) {

    let fs = "60px";
    switch(props.size) {
        case IconSize.BIG:
            fs = "big";
            break;
        case IconSize.MEDIUM:
            fs = "medium";
            break;
        case IconSize.SMALL:
            fs = "small";
            break;
        case IconSize.SMALLER:
            fs = "smaller";
            break;    
        case IconSize.DEFAULT:
        default:
            fs = "default";
    }

    return (
        <div className="Icon">
            <div onClick={props.click} className={(!(props.click === undefined) ? "Clickable " : " ") + fs}style={
                {
                    backgroundImage: `url(${props.src})`
                }
            }></div>
        </div>
    )
}