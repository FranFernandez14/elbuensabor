import TitleBar from "../Components/TitleBar/TitleBar"
import Content from "../Components/Content/Content";
import Button from "../Components/Button/Button";
import { ButtonColor } from "../Components/Button/ButtonColor";
import { ButtonWidth } from "../Components/Button/ButtonWidth";
import { TextSize } from "../Components/Text/TextSize";
import Footer from "../Components/Footer/Footer";

export default function Home(props: {
    logout?: boolean
}){
    if(props.logout) {
        localStorage.clear();
    }
    return (
        <>
            <TitleBar/>
            
            <Content>
                <Button click={()=>{window.location.href="carta";}} fontSize={TextSize.MEDIUM} width={ButtonWidth.HUG} color={ButtonColor.DARK}>Ver Carta</Button>
            </Content>

            <Footer/>
        </>

    );
}