import "./TitleBar.css"
import Text from "../Text/Text"
import { TextSize } from "../Text/TextSize"
import Icon from "../Icon/Icon"
import { IconSize } from "../Icon/IconSize"
import { useState } from "react"

export default function TitleBar(props : {userid ?: number | undefined}) {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    let right = (
        <div>
            <Text fontSize={TextSize.MEDIUM} link="login" underline={false}>Iniciar Sesión</Text>
            <Text fontSize={TextSize.MEDIUM} link="register" underline={false}>Registrarse</Text>
        </div>
    )

    if(!(props.userid === undefined)) {
        right = (
            <div>
                <Text fontSize={TextSize.MEDIUM} link={null}>Cosme Fulanito</Text>
                <Icon size={IconSize.MEDIUM} src={"images/usericon.svg"} click={() => {setIsMenuVisible(!isMenuVisible)} }/>
                <div className="TitleBarMenu" style={
                    {
                        transform : isMenuVisible ? "translateX(0)" : "translateX(100%)",
                        opacity : isMenuVisible ? "1" : "0"
                    }
                }>
                    <Text fontSize={TextSize.SMALL} underline={false} link={"MisDatos"}>Mi perfil</Text>
                    <Text fontSize={TextSize.SMALL} underline={false} link={"HistorialPedidosUsuario"}>Historial de pedidos</Text>
                    <Text fontSize={TextSize.SMALL} underline={false} link={"logout"}>Desconectarme</Text>
                </div>
            </div>
        )
    }

    return (
        <div className="TitleBar">
            <Text fontSize={TextSize.BIG} link={"/"} underline={false}>El Buen Sabor</Text>
            {right}
        </div>
    )
}