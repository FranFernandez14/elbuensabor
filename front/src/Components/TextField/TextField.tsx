import "./TextField.css"
import { TextFieldType } from "./TextFieldType"

export default function TextField(
    props : {
        placeholder : string,
        type : TextFieldType
        rows ?: number
    }
) {
    switch (props.type) {
        case TextFieldType.SINGLELINE:
            return (
                <div className="TextField">
                    <input type={"text"} placeholder={props.placeholder}/>
                </div>
            )
        case TextFieldType.PASSWORD:
            return (
                <div className="TextField">
                    <input type={"password"} placeholder={props.placeholder}/>
                </div>
            )
        case TextFieldType.MULTILINE:
            return (
                <div className="TextField">
                    <textarea placeholder={props.placeholder} rows={props.rows}/>
                </div>
            )
    }
    
}