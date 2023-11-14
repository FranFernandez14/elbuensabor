import TitleBar from "../Components/TitleBar/TitleBar"
import Content from "../Components/Content/Content";
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

import { DateRangePicker } from "rsuite";
import { DateRange } from "rsuite/esm/DateRangePicker";
import "../Components/DateRangePicker/DateRangePicker.less"
import { ButtonColor } from "../Components/Button/ButtonColor";
import Button from "../Components/Button/Button";
import { ButtonWidth } from "../Components/Button/ButtonWidth";

export default function MisDatos(){

    const [dateRange, setDateRange] = useState<DateRange>([new Date(), new Date()]);

    function changeDates(value: DateRange | null) : void {
        if(value !== null) {
            setDateRange(value);
        }
        console.log(dateRange[0].toString() + "-" + dateRange[1].toString());
    }

    return (
        <>
            <TitleBar />
            
            <Content>
                <ContentBox width={80}>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.MEDIUM} link={null}>Pedidos</Text>
                    </Flex>

                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                    <DateRangePicker
                        onChange={changeDates}
                        ranges={[]}
                        />
                    </Flex>
                    
                    <Table width={100} style={TableStyle.SEAMLESS} scrollable={true}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Tipo de Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Text fontSize={TextSize.SMALL}>Fideos</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>53</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>Comida</Text></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.SMALL}>Arroz</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>53</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>Comida</Text></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.SMALL}>Lomo</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>53</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>Comida</Text></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.SMALL}>Milanesa</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>53</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>Comida</Text></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.SMALL}>Coca Cola</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>53</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>Bebida</Text></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.SMALL}>Tiramisú</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>53</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>Postre</Text></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Button color={ButtonColor.ALT} click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG}>Descargar</Button>
                    </Flex>
                </ContentBox>
            </Content>

            <Footer/>
        </>
    );
}