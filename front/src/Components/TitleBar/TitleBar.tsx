import "./TitleBar.css"
import Text, { TextSize } from "../Text/Text"
import Icon, { IconSize } from "../Icon/Icon"
import React from "react"

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