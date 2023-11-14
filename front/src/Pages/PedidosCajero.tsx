import TitleBar from "../Components/TitleBar/TitleBar"
import Content from "../Components/Content/Content";
import { TextSize } from "../Components/Text/TextSize";
import Text from "../Components/Text/Text";
import ContentBox from "../Components/ContentBox/ContentBox";
import Flex from "../Components/Flex/Flex";
import { FlexAlign } from "../Components/Flex/FlexAlign";
import { FlexDirection } from "../Components/Flex/FlexDirection";
import Footer from "../Components/Footer/Footer";
import Search from "../Components/Search/Search";
import CheckBox from "../Components/CheckBox/CheckBox";
import Table from "../Components/Table/Table";
import { TextColor } from "../Components/Text/TextColor";
import Button from "../Components/Button/Button";
import { ButtonColor } from "../Components/Button/ButtonColor";
import { ButtonWidth } from "../Components/Button/ButtonWidth";
import { TableStyle } from "../Components/Table/TableStyle";

export default function MisDatos(){

    return (
        <>
            <TitleBar />
            
            <Content>
                <ContentBox width={100}>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.MEDIUM} link={null}>Pedidos</Text>
                    </Flex>

                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Search action={() => {}} placeholder="Buscar..." width={25}/>
                        <Flex direction={FlexDirection.WRAP} align={FlexAlign.CENTER}>
                            <CheckBox label={"A confirmar"}/>
                            <CheckBox label={"En cocina"}/>
                            <CheckBox label={"Listo"}/>
                            <CheckBox label={"En delivery"}/>
                            <CheckBox label={"Entregado"}/>
                            <CheckBox label={"Anulado"}/>
                        </Flex>
                    </Flex>
                    
                    <Table width={80} style={TableStyle.SEAMLESS} scrollable={true}>
                        <tbody>
                            <tr>
                                <td><Text fontSize={TextSize.MEDIUM}>Pedido N.° 2013120</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>$4999,99</Text></td>
                                <td><Text fontSize={TextSize.SMALL} color={TextColor.ALT}>A confirmar</Text></td>
                                <td><Button click={() => {}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.DARK}>Detalle</Button></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.MEDIUM}>Pedido N.° 2013120</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>$4999,99</Text></td>
                                <td><Text fontSize={TextSize.SMALL} color={TextColor.ALT}>A confirmar</Text></td>
                                <td><Button click={() => {}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.DARK}>Detalle</Button></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.MEDIUM}>Pedido N.° 2013120</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>$4999,99</Text></td>
                                <td><Text fontSize={TextSize.SMALL} color={TextColor.ALT}>A confirmar</Text></td>
                                <td><Button click={() => {}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.DARK}>Detalle</Button></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.MEDIUM}>Pedido N.° 2013120</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>$4999,99</Text></td>
                                <td><Text fontSize={TextSize.SMALL} color={TextColor.ALT}>A confirmar</Text></td>
                                <td><Button click={() => {}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.DARK}>Detalle</Button></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.MEDIUM}>Pedido N.° 2013120</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>$4999,99</Text></td>
                                <td><Text fontSize={TextSize.SMALL} color={TextColor.ALT}>A confirmar</Text></td>
                                <td><Button click={() => {}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.DARK}>Detalle</Button></td>
                            </tr>
                            <tr>
                                <td><Text fontSize={TextSize.MEDIUM}>Pedido N.° 2013120</Text></td>
                                <td><Text fontSize={TextSize.SMALL}>$4999,99</Text></td>
                                <td><Text fontSize={TextSize.SMALL} color={TextColor.ALT}>A confirmar</Text></td>
                                <td><Button click={() => {}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.DARK}>Detalle</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                    
                </ContentBox>
            </Content>

            <Footer/>
        </>
    );
}