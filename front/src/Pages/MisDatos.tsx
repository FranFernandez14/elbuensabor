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
import { useEffect, useState } from "react";
import Persona from "../types/Persona";
import { AuthService } from "../services/AuthService";




export default function MisDatos(){


    const [persona, setPersona] = useState<Persona | null>(null);

    useEffect(() => {
        (async () => {
            setPersona(await AuthService.getCurrentUser());
        })();
    }, []);


    return (
        <>
            <TitleBar />
            
            <Content>
                <ContentBox width={40}>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.MEDIUM} link={null}>Mis Datos</Text>
                    </Flex>

                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>{persona?.nombre} {persona?.apellido} - {persona?.rol}</Text>
                    </Flex>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>{persona?.email} - {persona?.telefono}</Text>
                    </Flex>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                        <Text fontSize={TextSize.SMALL} link={null}>{persona?.domicilios[0]?.calle + " "+ persona?.domicilios[0]?.numero}</Text>
                    </Flex>
 
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Button click={()=>{window.location.href="/"}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Atrás</Button>
                        <Button click={()=>{window.location.href="/ModificarMisDatos"}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Modificar</Button>
                    </Flex>
                </ContentBox>
            </Content>

            <Footer/>
        </>
    );
}