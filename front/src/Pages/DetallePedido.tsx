import Content from "../Components/Content/Content";
import ContentBox from "../Components/ContentBox/ContentBox";
import Flex from "../Components/Flex/Flex";
import { FlexAlign } from "../Components/Flex/FlexAlign";
import { FlexDirection } from "../Components/Flex/FlexDirection";
import Footer from "../Components/Footer/Footer";
import TitleBar from "../Components/TitleBar/TitleBar";
import Text from "../Components/Text/Text";
import { TextSize } from "../Components/Text/TextSize";
import { TextAlign } from "../Components/Text/TextAlign";
import Button from "../Components/Button/Button";
import { ButtonColor } from "../Components/Button/ButtonColor";
import { ButtonWidth } from "../Components/Button/ButtonWidth";
import Hr from "../Components/Hr/Hr";
import { useEffect, useState } from "react";
import Pedido from "../types/Pedido";
import { PedidoService } from "../services/PedidoService";
import { FormaPago } from "../types/FormaPago";
import { EstadoPedido } from "../types/EstadoPedido";
import Producto from "../types/Producto";
import { ProductoService } from "../services/ProductoService";
import Table from "../Components/Table/Table";
import { TableStyle } from "../Components/Table/TableStyle";

export default function DetallePedido() {

    const [pedido, setPedido] = useState<Pedido>();

    const [isLoading, setIsLoading] = useState(true);

    const [producto, setProducto] = useState<Producto>();

    useEffect(() => {
        (async () => {
            const p = await PedidoService.getPedidoActual();
            const i = producto?.id;
            if(i){
                const p = await ProductoService.getProducto(i);
                setProducto(p);
            }
            setPedido(p);
            setIsLoading(false);
            
        })();
    }, []);


    async function continuar() {
        while (isLoading);
        if(pedido === undefined || pedido.id === null ) return;
        if(pedido.formaPago === FormaPago.EFECTIVO) {
            pedido.estadoActual = EstadoPedido.PENDIENTE_PAGO;
        } else {
            pedido.estadoActual = EstadoPedido.PAGADO;
        }
       pedido.fechaPedido = new Date();
        
        await PedidoService.updatePedido(pedido.id, pedido);
        window.location.href="/PedidoConfirmado";
    }

    return(
        <>
            <TitleBar/>
            <Content>
                <div className="customContentBox" style={
                    {
                        width: "40%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
                        maxHeight: "100%"
                    }
                }>
                <ContentBox width={100}>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.MEDIUM} link={null} align={TextAlign.CENTER}>Detalle del pedido N° {pedido?.id}</Text>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>{""+Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date())}</Text>
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>{pedido?.tipoEnvio}</Text>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>Medio de pago: {pedido?.formaPago}</Text>
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>{producto?.denominacion}</Text>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>{producto?.precioVenta}</Text>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>{}</Text>
                        </Flex>

                        <Table style={TableStyle.SEAMLESS} width={100}>
                            <tbody>
                                {isLoading || pedido === undefined ? "" : pedido.detalles.map((detalle) => (
                                    <tr>
                                        <td>
                                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>{detalle.producto.denominacion} x {detalle.cantidad}</Text>
                                        </td>
                                        <td>
                                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>P.U. ${detalle.producto.precioVenta}</Text>
                                        </td>
                                        <td>
                                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>${detalle.producto.precioVenta * detalle.cantidad}</Text>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Hr/>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>Subtotal</Text>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>${pedido?.total} </Text>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>Descuento</Text>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>$0</Text>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>Total</Text>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>${pedido?.total}</Text>
                        </Flex>
                        
                        
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>Recibirá su pedido en unos 25 minutos</Text>
                        </Flex>


                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                <Button click={continuar} color={ButtonColor.ALT} width={ButtonWidth.HUG} fontSize={TextSize.SMALL}>Confirmar pedido</Button>  
                        </Flex>  
                </ContentBox>
                </div>
            </Content>
            <Footer/>
        </>
    );
}