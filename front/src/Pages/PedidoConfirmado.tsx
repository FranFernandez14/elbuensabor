import Button from "../Components/Button/Button";
import Content from "../Components/Content/Content";
import ContentBox from "../Components/ContentBox/ContentBox";
import Flex from "../Components/Flex/Flex";
import { FlexAlign } from "../Components/Flex/FlexAlign";
import { FlexDirection } from "../Components/Flex/FlexDirection";
import Text from "../Components/Text/Text";
import { TextAlign } from "../Components/Text/TextAlign";
import { TextSize } from "../Components/Text/TextSize";
import { ButtonWidth } from "../Components/Button/ButtonWidth";
import { ButtonColor } from "../Components/Button/ButtonColor";
import TitleBar from "../Components/TitleBar/TitleBar";
import Footer from "../Components/Footer/Footer";

export default function PedidoConfirmado() {
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
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Text fontSize={TextSize.MEDIUM} link={null} align={TextAlign.CENTER}>Pedido confirmado!</Text>
                    </Flex>
                </ContentBox>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Button click={()=>{window.location.href = "/Carta"}} color={ButtonColor.LIGHT} width={ButtonWidth.HUG} fontSize={TextSize.SMALLER}>Volver a la carta</Button>  
                    </Flex> 
            </div>
        </Content>
        <Footer/>
        </>
    )
}