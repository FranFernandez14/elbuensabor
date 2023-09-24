import { useState } from "react";
import Icon from "../Icon/Icon"
import { IconSize } from "../Icon/IconSize"
import "./Search.css"

export default function Search(
    props : {
        placeholder ?: string,
        value ?: string,
        width ?: number,
        action : (s : string) => void
}) {

    const [value, setValue] = useState(props.value !== undefined ? props.value : "");

    function run() {
        props.action(value);
    }

    function checkEnter(evt: React.KeyboardEvent<HTMLInputElement>) {
        if (evt.key === "Enter") {
            run();
        }
    }

    return (
        <div className="Search" style={
            {
                width: (props.width !== undefined ? props.width : 100) + "%"
            }
        }>
            <div>
                <Icon size={IconSize.SMALL} src={"public/images/search.svg"} click={run}/>
                <input type="text" spellCheck="false" value={value} placeholder={props.placeholder !== undefined ? props.placeholder : ""}
                onInput={evt => {setValue(evt.currentTarget.value);}} 
                onKeyDown={evt => {checkEnter(evt);}}/>
            </div>
        </div>
    )
}