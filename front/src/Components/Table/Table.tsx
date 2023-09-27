import "./Table.css"
import { TableStyle } from "./TableStyle";

export default function Table(
    props : {
        children: React.ReactNode,
        width ?: number,
        style ?: TableStyle,
        scrollable ?: boolean
    }
) {
    let ts = "seamlessTable";

    switch (props.style) {
        case TableStyle.DEFAULT:
        case TableStyle.SEAMLESS:
        default:
            ts = "seamlessTable";
            break;
        case TableStyle.SOLID:
            ts = "solidTable";
            break;
    }
    
    return (
        <div className={"Table " + ts} style={{
            width: props.width !== undefined ? props.width + "%" : "auto",
            overflowY: (props.scrollable !== undefined && props.scrollable === true) ? "auto" : "visible"
        }}>
            <table>
                {props.children}
            </table>
        </div>
    )
}