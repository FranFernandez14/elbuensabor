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
import ComboBox from "../Components/ComboBox/ComboBox";
import ComboBoxItem from "../Components/ComboBox/ComboBoxItem";

export default function RegistrarEmpleado(){
    return (
        <>
            <TitleBar />
            
            <Content>
                <ContentBox width={70}>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.MEDIUM} link={null}>Registrar Empleado</Text>
                    </Flex>

                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>Nombre</Text>
                        <TextField placeholder={""} type={TextFieldType.SINGLELINE}/>
                        <Text fontSize={TextSize.SMALL} link={null}>Apellido</Text>
                        <TextField placeholder={""} type={TextFieldType.SINGLELINE}/>
                        <ComboBox placeholder="Rol">
                            <ComboBoxItem id={1}>Cajero</ComboBoxItem>
                            <ComboBoxItem id={2}>Cocinero</ComboBoxItem>
                            <ComboBoxItem id={3}>Delivery</ComboBoxItem>
                            <ComboBoxItem id={4}>Administrador</ComboBoxItem>
                        </ComboBox>
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
                        <ComboBox placeholder="Departamento">
                            <ComboBoxItem id={1}>Mendoza</ComboBoxItem>
                            <ComboBoxItem id={2}>Godoy Cruz</ComboBoxItem>
                            <ComboBoxItem id={3}>Maipú</ComboBoxItem>
                            <ComboBoxItem id={4}>Guaymallén</ComboBoxItem>
                            <ComboBoxItem id={5}>Las Heras</ComboBoxItem>
                            <ComboBoxItem id={6}>San Martín</ComboBoxItem>
                            <ComboBoxItem id={7}>Lavalle</ComboBoxItem>
                        </ComboBox>
                    </Flex>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>Clave provisoria</Text>
                        <TextField placeholder={""} type={TextFieldType.PASSWORD}/>
                        <Text fontSize={TextSize.SMALL} link={null}>Repetir clave</Text>
                        <TextField placeholder={""} type={TextFieldType.PASSWORD}/>
                    </Flex>
 
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Button click={()=>{window.location.href = "/AdministrarEmpleados"}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Cancelar</Button>
                        <Button click={()=>{window.location.href = "/AdministrarEmpleados"}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Aceptar</Button>
                    </Flex>
                </ContentBox>
            </Content>

            <Footer/>
        </>
    );
}