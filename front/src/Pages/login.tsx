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
import Icon from "../Components/Icon/Icon";
import { IconSize } from "../Components/Icon/IconSize";
import Hr from "../Components/Hr/hr";

export default function ModificarMisDatos(){
    return (
        <>
            <TitleBar userid={undefined}/>
            
            <Content>
                <div style={
                    {
                        width: "30%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px"
                    }
                }>
                    <ContentBox width={100}>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Text fontSize={TextSize.MEDIUM} link={null}>Iniciar sesión</Text>
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <LoginGoogle/>
                        </Flex>

                        <Hr/>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Correo"} type={TextFieldType.SINGLELINE}/>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Contraseña"} type={TextFieldType.PASSWORD}/>
                        </Flex>
    
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Cancelar</Button>
                            <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Aceptar</Button>
                        </Flex>

                        
                    </ContentBox>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Text fontSize={TextSize.SMALLER} link={null}>¿No tiene cuenta?</Text>
                        <Text fontSize={TextSize.SMALLER} link={"register"}>REGISTRARSE</Text>
                    </Flex>
                </div>
            </Content>

            <Footer/>
        </>
    );
}


export function LoginGoogle() {
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: "12px",
                backgroundColor: "#F1E8E6",
                width: "100%",
                boxSizing: "border-box",
                padding: "5px",
                borderRadius: "4px",
                cursor: "pointer"
            }
        }>
            <Icon size={IconSize.SMALL} src={"images/googleicon.png"}/>
            <div style={
                {
                    fontFamily: "League Gothic",
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "rgb(53, 29, 49)",
                    flexGrow: "1",
                    textAlign: "center",
                    userSelect: "none"
                }
            }>
                Continuar con Google
            </div>
        </div>
    )
}