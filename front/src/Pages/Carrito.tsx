import TitleBar from "../Components/TitleBar/TitleBar"
import Content from "../Components/Content/Content";
import { TextSize } from "../Components/Text/TextSize";
import ContentBox from "../Components/ContentBox/ContentBox";
import Flex from "../Components/Flex/Flex";
import { FlexAlign } from "../Components/Flex/FlexAlign";
import { FlexDirection } from "../Components/Flex/FlexDirection";
import Footer from "../Components/Footer/Footer";
import Search from "../Components/Search/Search";
import Button from "../Components/Button/Button";
import { ButtonColor } from "../Components/Button/ButtonColor";
import { ButtonWidth } from "../Components/Button/ButtonWidth";
import TarjetaProducto from "../Components/TarjetaProducto/TarjetaProducto";
import Producto from "../types/Producto";
import { useEffect, useState } from "react";
import { ProductoService } from "../services/ProductoService";
import RubroProducto from "../types/RubroProducto";
import { RubroProductoService } from "../services/RubroProductoService";
import Table from "../Components/Table/Table";
import { TableStyle } from "../Components/Table/TableStyle";
import ItemCarrito from "../Components/ItemCarrito/ItemCarrito";
import Pedido from "../types/Pedido";
import { TextColor } from "../Components/Text/TextColor";
import Text from "../Components/Text/Text";
import { PedidoService } from "../services/PedidoService";
import { DetallePedidoService } from "../services/DetallePedidoService";
import DetallePedido from "../types/DetallePedido";

export default function Carrito(){

    const [pedido, setPedido] = useState<Pedido>();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const p = await PedidoService.getPedidoActual();
            setPedido(p);
            setIsLoading(false);
        })();
    }, []);
    

    async function changeDetalleCantidad(detalle: DetallePedido, cantidad: number) {
        if(detalle.id === null) return;
        detalle.cantidad = cantidad;
        detalle.subtotal = detalle.producto.precioVenta * cantidad;
        detalle.subtotalCosto = detalle.producto.costo * cantidad;
        await DetallePedidoService.updateDetallePedido(detalle.id, detalle);
        let p : Pedido = await PedidoService.getPedidoActual();
        p.total = 0;
        p.totalCosto = 0;
        p.detalles.forEach(d => {
            p.total += d.cantidad * d.producto.precioVenta;
            p.totalCosto += d.cantidad * d.producto.costo;
        });
        if(p.id === null) return;
        p = await PedidoService.updatePedido(p.id, p);
        setPedido(p);
    }

    return (
        <>
            <TitleBar userid={0}/>
            
            <Content>
                {
                    pedido === undefined ? "" : (
                        <ContentBox width={80}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                                <Flex direction={FlexDirection.ROW} align={FlexAlign.START}>
                                    <Text fontSize={TextSize.MEDIUM} link={null}>Carrito</Text>
                                </Flex>
                                <Table style={TableStyle.SEAMLESS} width={100}><tbody>
                                    {isLoading ? "" : pedido?.detalles.map(detalle => (
                                        <ItemCarrito key={detalle.id} detalle={detalle} setCantidad={(cantidad: number) =>{changeDetalleCantidad(detalle, cantidad)} }/>
                                    ))}
                                </tbody></Table>

                                <div style={{width: "100%"}}>
                                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                        <Text color={TextColor.LIGHTER} fontSize={TextSize.SMALL}>Subtotal</Text>
                                        <Text color={TextColor.LIGHTER} fontSize={TextSize.SMALL}>${pedido?.total}</Text>
                                    </Flex>
                                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                        <Button click={()=>{window.location.href="/Carta"}} color={ButtonColor.DARK} width={ButtonWidth.HUG} fontSize={TextSize.SMALLER}>Agregar más productos</Button>
                                        <Button click={()=>{window.location.href="/RealizarPedido"}} color={ButtonColor.ALT} width={ButtonWidth.HUG} fontSize={TextSize.SMALLER}>Confirmar pedido</Button>
                                    </Flex>
                                </div>
                            </div>
                            
                        </ContentBox>
                    )
                }
            </Content>

            <Footer/>
        </>
    );
}