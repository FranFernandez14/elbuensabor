import "./Footer.css"
import Text, { TextSize } from "../Text/Text"
import Icon, { IconSize } from "../Icon/Icon"
import React from "react"
import Flex, { FlexAlign, FlexDirection } from "../Flex/Flex"

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
                    <Icon size={IconSize.SMALLER} click={()=>{window.location.href="twitter.com"}} src={"images/twittericon.png"}/>
                    <Icon size={IconSize.SMALLER} click={()=>{window.location.href="facebook.com"}} src={"images/facebookicon.svg"}/>
                    <Icon size={IconSize.SMALLER} click={()=>{window.location.href="instagram.com"}} src={"images/instagramicon.png"}/>
                </Flex>
            </Flex>
        </div>
    )
}