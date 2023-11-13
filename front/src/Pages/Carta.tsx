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

export default function Carta(){

    const [productos, setProductos] = useState<Producto[]>([]);
    const [rubros, setRubros] = useState<RubroProducto[]>([]);
    const [pedido, setPedido] = useState<Pedido>();

    const [rubroSelec, setRubroSelec] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        (async () => {

            const rubros = await RubroProductoService.getRubrosProducto();
            setRubros(rubros);

            if(rubroSelec.length === 0) {
                setProductos(await ProductoService.getProductos());
            } else {
                setProductos((await ProductoService.getProductosPorRubro(rubroSelec, {number:0, size:100})));
            }

            const p = await PedidoService.getPedidoActual();
            setPedido(p);
            

            setIsLoading(false);
        })();
    }, [rubroSelec]);
    

    async function changeDetalleCantidad(detalle: DetallePedido, cantidad: number) {
        if(detalle.id === null) return;
        detalle.cantidad = cantidad;
        detalle.subtotal = detalle.producto.precioVenta * cantidad;
        detalle.subtotalCosto = detalle.producto.costo * cantidad;
        await DetallePedidoService.updateDetallePedido(detalle.id, detalle);
        
        setPedido(await PedidoService.getPedidoActual());
    }

    async function addDetallePedido(producto: Producto) {
        
        if(pedido === undefined) return;
        let detalleEncontrado = false;
        pedido.detalles.forEach(d => {
            if(d.producto.id === producto.id) {
                changeDetalleCantidad(d, d.cantidad + 1);
                detalleEncontrado = true;
            }
        });
        if(detalleEncontrado) return;
        let detalle : DetallePedido = {
            id: null,
            fechaAlta: new Date(),
            fechaModificacion: null,
            fechaBaja: null,
            cantidad: 1,
            subtotal: producto.precioVenta,
            subtotalCosto: producto.costo,
            producto: producto
        };
        detalle = await DetallePedidoService.createDetallePedido(detalle);
        pedido.detalles.push(detalle);
        setPedido(await PedidoService.updatePedido(1, pedido));
    }

    return (
        <>
            <TitleBar userid={0}/>
            
            <Content>
                <ContentBox width={70}>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Search action={() => {}} placeholder="Buscar..." width={60}/>
                    </Flex>

                    <Flex direction={FlexDirection.WRAP} align={FlexAlign.CENTER}>
                        <Button click={() =>{setRubroSelec("")}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.DARK}>
                            Todo
                        </Button>
                        {isLoading ? "" : rubros.map(rubro => (
                            <Button key={rubro.id} click={() =>{setRubroSelec(rubro.denominacion)}} fontSize={TextSize.SMALLER} width={ButtonWidth.HUG} color={ButtonColor.DARK}>
                                {rubro.denominacion}
                            </Button>
                        ))}
                    </Flex>
                    
                    <Flex direction={FlexDirection.WRAP} align={FlexAlign.CENTER}>
                        {isLoading ? "" : productos.map(producto => (
                            <TarjetaProducto key={producto.id} producto={producto} addToCart={(producto) => {addDetallePedido(producto)}}/>
                        ))}
                    </Flex>
                    
                </ContentBox>

                {
                    pedido === undefined ? "" : (
                        <ContentBox width={30}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                                <Table style={TableStyle.SEAMLESS} width={100}><tbody>
                                    {isLoading ? "" : pedido?.detalles.map(detalle => (
                                        <ItemCarrito key={detalle.id} compacto detalle={detalle} setCantidad={(cantidad: number) =>{changeDetalleCantidad(detalle, cantidad)} }/>
                                    ))}
                                </tbody></Table>

                                <div style={{width: "100%"}}>
                                    <Text color={TextColor.LIGHTER} fontSize={TextSize.SMALLER}>Subtotal: ${pedido?.total}</Text>
                                    <Button click={()=>{window.location.href="/Carrito"}} color={ButtonColor.ALT} width={ButtonWidth.FILL} fontSize={TextSize.SMALLER}>Ir a pagar</Button>
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