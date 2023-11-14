import TitleBar from "../Components/TitleBar/TitleBar"
import Content from "../Components/Content/Content";
import { TextSize } from "../Components/Text/TextSize";
import Text from "../Components/Text/Text";
import ContentBox from "../Components/ContentBox/ContentBox";
import Footer from "../Components/Footer/Footer";

export default function Opciones(props : {
    children: React.ReactNode
}){

    return (
        <>
            <TitleBar />
            
            <Content>
                <ContentBox width={40}>
                    <Text fontSize={TextSize.MEDIUM}>Opciones</Text>
                    {props.children}
                    
                </ContentBox>
            </Content>

            <Footer/>
        </>
    );
}