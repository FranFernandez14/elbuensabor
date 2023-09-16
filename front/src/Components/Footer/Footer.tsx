import "./Footer.css"
import Text from "../Text/Text"
import { TextSize } from "../Text/TextSize"
import Icon from "../Icon/Icon"
import { IconSize } from "../Icon/IconSize"
import Flex from "../Flex/Flex"
import { FlexAlign } from "../Flex/FlexAlign"
import { FlexDirection } from "../Flex/FlexDirection"

export default function TitleBar() {


    return (
        <div className="Footer">
            <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                    <Text fontSize={TextSize.SMALLER} link={null}>Ubicación Calle Inventada 11 / Restaurante El Buen Sabor</Text>
                </Flex>
                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                <Text fontSize={TextSize.SMALLER} link={null}>Tel. 261 111 1111</Text>
                </Flex>
                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                    <Text fontSize={TextSize.SMALLER} link={null}>Redes: </Text>
                    <Icon size={IconSize.SMALLER} click={()=>{window.location.href="https://www.twitter.com"}} src={"images/twittericon.png"}/>
                    <Icon size={IconSize.SMALLER} click={()=>{window.location.href="https://www.facebook.com"}} src={"images/facebookicon.svg"}/>
                    <Icon size={IconSize.SMALLER} click={()=>{window.location.href="https://www.instagram.com"}} src={"images/instagramicon.png"}/>
                </Flex>
            </Flex>
        </div>
    )
}