import TitleBar from "../Components/TitleBar/TitleBar"
import Content from "../Components/Content/Content";
import Button from "../Components/Button/Button";
import { ButtonColor } from "../Components/Button/ButtonColor";
import { ButtonWidth } from "../Components/Button/ButtonWidth";
import { TextSize } from "../Components/Text/TextSize";
import Text from "../Components/Text/Text";
import ContentBox from "../Components/ContentBox/ContentBox";
import Flex from "../Components/Flex/Flex";
import { FlexAlign } from "../Components/Flex/FlexAlign";
import { FlexDirection } from "../Components/Flex/FlexDirection";
import Footer from "../Components/Footer/Footer";
import TextField from "../Components/TextField/TextField";
import { TextFieldType } from "../Components/TextField/TextFieldType";
import Hr from "../Components/Hr/Hr";
import Google from "../Components/Google/Google";
import RegisterRequest from "../types/RegisterRequest";
import { AuthService } from "../services/AuthService";
import { useState } from "react";
import { Rol } from "../types/Rol";

export default function Register(){

    const [request, setRequest] = useState<RegisterRequest>({
        email: "",
        password: "",
        telefono: "",
        nombre: "",
        apellido: "",
        domicilio: {
            id: null,
            fechaAlta: new Date(),
            fechaModificacion: null,
            fechaBaja: null,
            calle: "",
            numero: 0,
            codigoPostal: 0,
            localidad: "",
            numeroDpto: 0,
            pisoDpto: 0,
            persona: null
        },
        rol: Rol.CLIENTE
    });

    const [password2, setPassword2] = useState("");

    async function registrarse() {
        if(request.password !== password2) {
            alert("La contraseña no coincide");
            return;
        }
        await AuthService.register(request);
        window.location.href = "/Carta";
    }

    return (
        <>
            <TitleBar/>
            
            <Content>
                <div className="customContentBox" style={
                    {
                        width: "30%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
                        maxHeight: "100%",
                        boxSizing: "border-box"
                    }
                }>
                    <ContentBox width={100}>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Text fontSize={TextSize.MEDIUM} link={null}>Registrarse</Text>
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Google/>
                        </Flex>

                        <Hr/>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Nombre"} type={TextFieldType.SINGLELINE} value={request.nombre} setValue={(v: string) => {request.nombre = v}}/>
                            <TextField placeholder={"Apellido"} type={TextFieldType.SINGLELINE} value={request.apellido} setValue={(v: string) => {request.apellido = v}}/>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Teléfono"} type={TextFieldType.SINGLELINE}  value={request.telefono} setValue={(v: string) => {request.telefono = v}}/>
                            <TextField placeholder={"Departamento"} type={TextFieldType.SINGLELINE}  value={request.domicilio.localidad} setValue={(v: string) => {request.domicilio.localidad = v}}/>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Dirección"} type={TextFieldType.SINGLELINE}  value={request.domicilio.calle} setValue={(v: string) => {request.domicilio.calle = v}}/>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Correo"} type={TextFieldType.SINGLELINE} value={request.email} setValue={(v: string) => {request.email = v}}/>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Contraseña"} type={TextFieldType.PASSWORD} value={request.password} setValue={(v: string) => {request.password = v}}/>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Repetir Contraseña"} type={TextFieldType.PASSWORD} value={request.password} setValue={(v: string) => {setPassword2(v)}}/>
                        </Flex>
    
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Button click={()=>{window.location.href="/";}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Cancelar</Button>
                            <Button click={registrarse} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Aceptar</Button>
                        </Flex>

                        
                    </ContentBox>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Text fontSize={TextSize.SMALLER} link={null}>¿Ya está registrado?</Text>
                        <Text fontSize={TextSize.SMALLER} link={"login"}>Iniciar Sesión</Text>
                    </Flex>
                </div>
            </Content>

            <Footer/>
        </>
    );
}

