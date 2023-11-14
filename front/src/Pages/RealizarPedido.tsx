import TitleBar from "../Components/TitleBar/TitleBar"
import Content from "../Components/Content/Content";
import { TextSize } from "../Components/Text/TextSize";
import ContentBox from "../Components/ContentBox/ContentBox";
import Flex from "../Components/Flex/Flex";
import { FlexAlign } from "../Components/Flex/FlexAlign";
import { FlexDirection } from "../Components/Flex/FlexDirection";
import Footer from "../Components/Footer/Footer";
import Button from "../Components/Button/Button";
import { ButtonColor } from "../Components/Button/ButtonColor";
import { ButtonWidth } from "../Components/Button/ButtonWidth";
import { useEffect, useState } from "react";
import Pedido from "../types/Pedido";
import Text from "../Components/Text/Text";
import { PedidoService } from "../services/PedidoService";
import ComboBox from "../Components/ComboBox/ComboBox";
import { TipoEnvio } from "../types/TipoEnvio";
import ComboBoxItem from "../Components/ComboBox/ComboBoxItem";
import TextField from "../Components/TextField/TextField";
import { TextFieldType } from "../Components/TextField/TextFieldType";
import { FormaPago } from "../types/FormaPago";
import { EstadoPedido } from "../types/EstadoPedido";

export default function RealizarPedido(){

    const [tipoEnvio, setTipoEnvio] = useState<TipoEnvio>();
    const [formaPago, setFormaPago] = useState<FormaPago>();

    const [pedido, setPedido] = useState<Pedido>();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const p = await PedidoService.getPedidoActual();
            setPedido(p);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        if(tipoEnvio === TipoEnvio.DELIVERY) setFormaPago(FormaPago.MERCADO_PAGO);
    }, [tipoEnvio]);

    async function continuar() {
        while (isLoading);
        if(pedido === undefined || pedido.id === null || tipoEnvio === undefined || formaPago === undefined) return;
        pedido.tipoEnvio = tipoEnvio;
        pedido.formaPago = formaPago;
        if(formaPago === FormaPago.EFECTIVO) {
            pedido.estadoActual = EstadoPedido.PENDIENTE_PAGO;
        } else {
            pedido.estadoActual = EstadoPedido.PAGADO;
        }
        await PedidoService.updatePedido(pedido.id, pedido);
        window.location.href="/DetallePedido";
    }


    return (
        <>
            <TitleBar />
            
            <Content>
                {
                    pedido === undefined ? "" : (
                        <ContentBox width={50}>
                            <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                <Text fontSize={TextSize.MEDIUM} link={null}>Pedido</Text>
                            </Flex>
                            <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                <Text fontSize={TextSize.SMALL} link={null}>¿Dónde desea retirar el pedido?</Text>
                            </Flex>
                            <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                <ComboBox fullWidth placeholder="Tipo de Envío" change={(i) => {setTipoEnvio(Object.values(TipoEnvio)[i])}}>
                                    {
                                        Object.keys(TipoEnvio).filter((v) => isNaN(Number(v))).map((k, i) => (
                                            <ComboBoxItem key={i} id={i}>{k}</ComboBoxItem>
                                        ))
                                    }
                                </ComboBox>
                            </Flex>

                            <div style={{
                                display: tipoEnvio === TipoEnvio.DELIVERY ? "flex" : "none",
                                flexDirection : "column",
                                alignItems: "flex-start",
                                gap: "12px",
                                width: "100%"
                            }}>
                                <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                    <Text fontSize={TextSize.SMALL} link={null}>Dirección</Text>
                                    <TextField type={TextFieldType.SINGLELINE} placeholder=""/>
                                </Flex>
                                <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                    <Text fontSize={TextSize.SMALL} link={null}>Teléfono</Text>
                                    <TextField type={TextFieldType.SINGLELINE} placeholder=""/>
                                </Flex>
                            </div>
                                
                            <div style={{
                                display: tipoEnvio === TipoEnvio.TAKE_AWAY ? "block" : "none",
                                flexDirection : "column",
                                alignItems: "flex-start",
                                gap: "12px",
                                width: "100%"
                            }}>
                                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                    <Text fontSize={TextSize.SMALL} link={null}>Seleccione un medio de pago</Text>
                                </Flex>
                                <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                    <ComboBox fullWidth placeholder="Forma de pago" change={(i) => {setFormaPago(Object.values(FormaPago)[i])}}>
                                        {
                                            Object.keys(FormaPago).filter((v) => isNaN(Number(v))).map((k, i) => (
                                                <ComboBoxItem key={i} id={i}>{k}</ComboBoxItem>
                                            ))
                                        }
                                    </ComboBox>
                                </Flex>
                            </div>
                            <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                <Button click={()=>{window.location.href="/Carrito"}} color={ButtonColor.DARK} width={ButtonWidth.HUG} fontSize={TextSize.SMALLER}>Atrás</Button>
                                {
                                    !isLoading && tipoEnvio !== undefined && formaPago !== undefined ? (
                                        <Button click={continuar} color={ButtonColor.ALT} width={ButtonWidth.HUG} fontSize={TextSize.SMALLER}>Siguiente</Button>
                                    ) : ""
                                }
                            </Flex>                            
                        </ContentBox>
                    )
                }
            </Content>

            <Footer/>
        </>
    );
}