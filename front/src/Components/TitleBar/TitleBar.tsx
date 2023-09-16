import "./TitleBar.css"
import Text from "../Text/Text"
import { TextSize } from "../Text/TextSize"
import Icon from "../Icon/Icon"
import { IconSize } from "../Icon/IconSize"

export default function TitleBar(props : {userid : number | undefined}) {

    let right = (
        <div>
            <Text fontSize={TextSize.MEDIUM} link="login">Iniciar Sesión</Text>
            <Text fontSize={TextSize.MEDIUM} link="register">Registrarse</Text>
        </div>
    )

    if(!(props.userid === undefined)) {
        right = (
            <div>
                <Text fontSize={TextSize.MEDIUM} link={null}>Cosme Fulanito</Text>
                <Icon size={IconSize.MEDIUM} src={"images/usericon.svg"} click={() => { } }/>
            </div>
        )
    }

    return (
        <div className="TitleBar">
            <Text fontSize={TextSize.BIG} link={null}>El Buen Sabor</Text>
            {right}
        </div>
    )
}