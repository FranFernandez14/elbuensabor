import "./Image.css"
import { ImageShape } from "./ImageShape";

export default function Image(
    props : {
        src: string,
        width ?: string,
        height ?: string,
        shape ?: ImageShape
    }
) {
    const width = props.width !== undefined ? props.width : "100%";
    const height = props.height !== undefined ? props.height : "100%";

    let br = "0";
    switch (props.shape) {
        case ImageShape.RECTANGLE:
        default:
            br = "0";
            break;
        case ImageShape.ROUNDED:
            br = "12px";
            break;
        case ImageShape.ELLIPSE:
            br = "50%";
            break;
    }

    return (
        <div className="Image" style={
            {
                width: width,
                height: height,
                backgroundImage: "url('" + props.src + "')",
                borderRadius: br
            }
        }>

        </div>
    )
}