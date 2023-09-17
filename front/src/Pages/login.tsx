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

export default function Login(){
    return (
        <>
            <TitleBar userid={undefined}/>
            
            <Content>
                <div className="customContentBox" style={
                    {
                        width: "30%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
                        maxHeight: "100%"
                    }
                }>
                    <ContentBox width={100}>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Text fontSize={TextSize.MEDIUM} link={null}>Iniciar sesión</Text>
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Google/>
                        </Flex>

                        <Hr/>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Correo"} type={TextFieldType.SINGLELINE}/>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Contraseña"} type={TextFieldType.PASSWORD}/>
                        </Flex>
    
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Button click={()=>{window.location.href="/";}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Cancelar</Button>
                            <Button click={()=>{window.location.href="carta";}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Aceptar</Button>
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

