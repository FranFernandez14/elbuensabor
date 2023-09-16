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

export default function MisDatos(){
    return (
        <>
            <TitleBar userid={0}/>
            
            <Content>
                <ContentBox width={40}>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.MEDIUM} link={null}>Mis Datos</Text>
                    </Flex>

                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>Pepe Honguito - Cocinero</Text>
                    </Flex>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>pedrohongo@gmail.com - 2612345678</Text>
                    </Flex>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>Calle Falsa 1234</Text>
                    </Flex>
 
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Atrás</Button>
                        <Button click={()=>{window.location.href="ModificarMisDatos"}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Modificar</Button>
                    </Flex>
                </ContentBox>
            </Content>

            <Footer/>
        </>
    );
}