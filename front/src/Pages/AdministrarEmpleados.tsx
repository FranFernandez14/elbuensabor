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
import Table from "../Components/Table/Table";
import { TableStyle } from "../Components/Table/TableStyle";
import { useState } from "react";
import Modal from "../Components/Modal/Modal";
import { TextAlign } from "../Components/Text/TextAlign";

export default function AdministrarEmpleados(){

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isAlta, setIsAlta] = useState(false);

    // Actualizar cuando tengamos el tipo Persona
    const [nomYApe, setNomYApe] = useState("");

    function mostrarModal(isAlta: boolean, nombre: string, apellido: string) : void {
        setIsAlta(isAlta);
        setNomYApe(apellido + ", " + nombre);
        setIsModalVisible(true);
    }

    return (
        <>
            <TitleBar />
            
            <Content>
                <ContentBox width={100}>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.MEDIUM} link={null}>Empleados</Text>
                        <Button click={()=>{window.location.href = "/RegistrarEmpleado"}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Nuevo</Button>
                    </Flex>

                    <Table width={100} style={TableStyle.SOLID} scrollable={true}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Rol</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>E-mail</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Cajero</td>
                                <td>Francisco</td>
                                <td>Fernández</td>
                                <td>franfernandez@gmail.com</td>
                                <td>2616327492</td>
                                <td>Dirección del Fran</td>
                                <td>
                                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                        <Button click={()=>{}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Modificar</Button>
                                        <Button click={()=>{mostrarModal(false, "Francisco", "Fernandez");}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Dar de baja</Button>
                                    </Flex>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cajero</td>
                                <td>Francisco</td>
                                <td>Fernández</td>
                                <td>franfernandez@gmail.com</td>
                                <td>2616327492</td>
                                <td>Dirección del Fran</td>
                                <td>
                                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                        <Button click={()=>{mostrarModal(true, "Francisco", "Fernandez");}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Dar de alta</Button>
                                    </Flex>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </ContentBox>
            </Content>

            <Footer/>

            <Modal visible={isModalVisible} maxWidth="30%">
                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                    <Text fontSize={TextSize.SMALLER} link={null} align={TextAlign.CENTER}>¿Está seguro de que desea dar de {isAlta ? "alta" : "baja"} al empleado {nomYApe}?</Text>
                </Flex>
                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                    <Button click={()=>{setIsModalVisible(false);}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.ALT}>No</Button>
                    <Button click={()=>{setIsModalVisible(false);}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Sí</Button>
                </Flex>
            </Modal>
        </>
    );
}