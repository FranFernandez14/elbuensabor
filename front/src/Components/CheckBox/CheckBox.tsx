import "./CheckBox.css"
import Text from "../Text/Text"
import { TextSize } from "../Text/TextSize"
import { useState } from "react"

export default function CheckBox(
    props : {
        label: string,
        value?: boolean,
        setValue ?: (value: boolean) => void
    }
) {

    const [value, setValue] = useState(props.value !== undefined ? props.value : false);

    let style = {
        backgroundImage: "url('public/images/tick.png')",
        backgroundColor: "#956A92"
    }

    if(!value) {
        style = {
            backgroundImage: "none",
            backgroundColor: "#F1E8E6"
        }
    }

    function toggle() {
        if(props.setValue !== undefined) {
            props.setValue(!value);
        }
        setValue(!value);
    }

    return (
        <div className="CheckBox">
            <div onClick={toggle}>
                <div className="CheckBoxBox" style={style}>   
                </div>
                <Text link={null} fontSize={TextSize.SMALL}>{props.label}</Text>
            </div>
        </div>
    )
}