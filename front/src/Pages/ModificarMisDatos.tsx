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

export default function ModificarMisDatos(){
    return (
        <>
            <TitleBar userid={0}/>
            
            <Content>
                <ContentBox width={70}>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.MEDIUM} link={null}>Modificar Mis Datos</Text>
                    </Flex>

                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>Pepe Honguito - Cocinero</Text>
                    </Flex>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>E-mail</Text>
                        <TextField placeholder={"su-nombre@example.com"} type={TextFieldType.SINGLELINE}/>
                        <Text fontSize={TextSize.SMALL} link={null}>Teléfono</Text>
                        <TextField placeholder={""} type={TextFieldType.SINGLELINE}/>
                    </Flex>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>Dirección</Text>
                        <TextField placeholder={""} type={TextFieldType.SINGLELINE}/>
                    </Flex>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>Contraseña</Text>
                        <TextField placeholder={""} type={TextFieldType.PASSWORD}/>
                        <Text fontSize={TextSize.SMALL} link={null}>Repetir Contraseña</Text>
                        <TextField placeholder={""} type={TextFieldType.PASSWORD}/>
                    </Flex>
 
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Cancelar</Button>
                        <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Aceptar</Button>
                    </Flex>
                </ContentBox>
            </Content>

            <Footer/>
        </>
    );
}