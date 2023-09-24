import { useState } from "react"
import "./TextField.css"
import { TextFieldType } from "./TextFieldType"

export default function TextField(
    props : {
        placeholder : string,
        type : TextFieldType
        rows ?: number
        value ?: string
        setValue ?: (s: string) => void
    }
) {

    const [value, setValue] = useState(props.value !== undefined ? props.value : "");


    function setContent(s: string) {
        if(props.setValue !== undefined) {
            props.setValue(s);
        }
        setValue(s);
    }

    switch (props.type) {
        case TextFieldType.SINGLELINE:
            return (
                <div className="TextField">
                    <input type={"text"} value={value} placeholder={props.placeholder} 
                    onInput={evt => {setContent(evt.currentTarget.value);}}/>
                </div>
            )
        case TextFieldType.PASSWORD:
            return (
                <div className="TextField">
                    <input type={"password"} value={value} placeholder={props.placeholder}
                    onInput={evt => {setContent(evt.currentTarget.value);}}/>
                </div>
            )
        case TextFieldType.MULTILINE:
            return (
                <div className="TextField">
                    <textarea value={value} placeholder={props.placeholder} rows={props.rows}
                    onInput={evt => {setContent(evt.currentTarget.value);}}/>
                </div>
            )
    }
    
}