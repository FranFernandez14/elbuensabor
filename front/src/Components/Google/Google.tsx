import Icon from "../Icon/Icon"
import { IconSize } from "../Icon/IconSize"
import "./Google.css"


export default function Google() {
    return (
        <div className="Google">
            <Icon size={IconSize.SMALL} src={"images/googleicon.png"}/>
            <div>
                Continuar con Google
            </div>
        </div>
    )
}