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
import { useEffect, useState } from "react";
import { TextColor } from "../Components/Text/TextColor";
import Producto from "../types/Producto";
import { ProductoService } from "../services/ProductoService";

export default function AdministrarProductos(){

    const [productos, setProductos] = useState<Producto[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const productos =await ProductoService.getProductos();
            setProductos(productos);
            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            <TitleBar />
            
            <Content>
                <ContentBox width={70}>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.MEDIUM} link={null}>Productos</Text>
                    </Flex>

                    <Table width={100} style={TableStyle.SEAMLESS} scrollable={true}>
                        <tbody>
                            {
                                isLoading ? "" : (
                                    productos.map(producto => (
                                        <tr key={producto.id}>
                                            <td>
                                                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                                    {producto.denominacion}
                                                </Flex>
                                            </td>
                                            <td>
                                                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                                    {producto.rubroProducto.denominacion}
                                                </Flex>
                                            </td>
                                            <td>
                                                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                                    <Text color={TextColor.ALT}>
                                                        {producto.fechaBaja === null || producto.fechaBaja > new Date() ? "Alta" : "Baja"}
                                                    </Text>
                                                </Flex>
                                            </td>
                                            <td>
                                                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                                    $ {producto.precioVenta}
                                                </Flex>
                                            </td>
                                            <td>
                                                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                                    <Button click={()=>{window.location.href = "/ModificarProducto/modificar/" + producto.id}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Modificar</Button>
                                                </Flex>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </Table>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Button click={()=>{window.location.href = "/ModificarProducto/nuevo"}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Nuevo</Button>
                    </Flex>
                </ContentBox>
            </Content>

            <Footer/>
        </>
    );
}