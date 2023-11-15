import "./TitleBar.css"
import Text from "../Text/Text"
import { TextSize } from "../Text/TextSize"
import Icon from "../Icon/Icon"
import { IconSize } from "../Icon/IconSize"
import { useEffect, useState } from "react"
import { AuthService } from "../../services/AuthService"
import { Rol } from "../../types/Rol"
import Persona from "../../types/Persona"

export default function TitleBar() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    let right = (
        <div>
            <Text fontSize={TextSize.MEDIUM} link="login" underline={false}>Iniciar Sesión</Text>
            <Text fontSize={TextSize.MEDIUM} link="register" underline={false}>Registrarse</Text>
        </div>
    )

    let opciones;
    const [persona, setPersona] = useState<Persona | null>(null);

    useEffect(() => {
        (async () => {
            setPersona(await AuthService.getCurrentUser());
        })();
    }, []);

    if(!(persona === null)) {
        switch (persona.rol) {
            case Rol.ADMINISTRADOR:
                opciones = (<Text fontSize={TextSize.SMALL} underline={false} link={"OpcionesAdministrador"}>Opciones</Text>);
                break;
            case Rol.CAJERO:
                opciones = (<Text fontSize={TextSize.SMALL} underline={false} link={"OpcionesCajero"}>Opciones</Text>);
                break;
            case Rol.COCINERO:
                opciones = (<Text fontSize={TextSize.SMALL} underline={false} link={"OpcionesCocinero"}>Opciones</Text>);
                break;
            case Rol.DELIVERY:
                opciones = (<Text fontSize={TextSize.SMALL} underline={false} link={"OpcionesDelivery"}>Opciones</Text>);
                break;
            case Rol.CLIENTE:
                opciones = (<></>);
                break;
        }
        
        right = (
            <div>
                <Text fontSize={TextSize.MEDIUM} link={null}>{persona.nombre} {persona.apellido}</Text>
                <Icon size={IconSize.MEDIUM} src={"images/usericon.svg"} click={() => {setIsMenuVisible(!isMenuVisible)} }/>
                <div className="TitleBarMenu" style={
                    {
                        transform : isMenuVisible ? "translateX(0)" : "translateX(100%)",
                        opacity : isMenuVisible ? "1" : "0"
                    }
                }>
                    <Text fontSize={TextSize.SMALL} underline={false} link={"MisDatos"}>Mi perfil</Text>
                    {opciones}
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