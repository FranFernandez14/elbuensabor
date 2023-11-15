import TitleBar from "../Components/TitleBar/TitleBar";
import Footer from "../Components/Footer/Footer";
import Content from "../Components/Content/Content";
import ContentBox from "../Components/ContentBox/ContentBox";
import Flex from "../Components/Flex/Flex";
import Text from "../Components/Text/Text";
import { TextSize } from "../Components/Text/TextSize";
import { FlexDirection } from "../Components/Flex/FlexDirection";
import { FlexAlign } from "../Components/Flex/FlexAlign";
import { TextAlign } from "../Components/Text/TextAlign";
import Table from "../Components/Table/Table";
import { TableStyle } from "../Components/Table/TableStyle";
import { useEffect, useState } from "react";
import Button from "../Components/Button/Button";
import { ButtonColor } from "../Components/Button/ButtonColor";
import { ButtonWidth } from "../Components/Button/ButtonWidth";
import Persona from "../types/Persona";
import { AuthService } from "../services/AuthService";

export default function HistorialPedidos() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [persona, setPersona] = useState<Persona>();


    useEffect(() => {
        (async () => {
            const p = await AuthService.getCurrentUser();
            if (p !== null){
                setPersona(p);
                setIsLoading(false);
            }
        })();
    }, []);

    return(
        <>
        <TitleBar/>

        <Content>
            <div className="customContentBox" style={
                {
                    width: "90%",
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
                        <Text fontSize={TextSize.MEDIUM} link={null} align={TextAlign.CENTER}> Historial de Pedidos </Text>
                    </Flex>

                    <Table style={TableStyle.SOLID} width={100}>
                        <tbody>
                            {isLoading || (persona === undefined && persona===null) ? "" : persona?.pedidos.map((detalle) => (
                                <tr key={detalle.id}>
                                    <td>
                                        <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}> Pedido N° {detalle.id}</Text>
                                    </td>
                                    <td>
                                        <Text fontSize={TextSize.SMALLER} link={null} align={TextAlign.CENTER}>{""+Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date())}</Text>
                                    </td>
                                    <td>
                                        <Text fontSize={TextSize.SMALL} link={null} align={TextAlign.CENTER}>${detalle.total}</Text>
                                    </td>
                                    <td>
                                    <Button click={() => {window.location.href = "/detallePedido"}} color={ButtonColor.LIGHT} width={ButtonWidth.HUG} fontSize={TextSize.SMALLER}> Detalle </Button>
                                    </td>
                                    <td>
                                    <Button click={()=>{null}} color={ButtonColor.ALT} width={ButtonWidth.HUG} fontSize={TextSize.SMALLER}> Factura </Button>
                                    </td>
                                </tr>
                                
                            ))}
                        </tbody>
                    </Table>
                </ContentBox>
            </div>
        </Content>

        <Footer/>
        </>
    )
}