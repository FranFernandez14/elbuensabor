import TitleBar from "../Components/TitleBar/TitleBar"
import Content from "../Components/Content/Content";
import React from "react";
import Button, { ButtonColor, ButtonWidth } from "../Components/Button/Button";
import { TextSize } from "../Components/Text/Text";
import Text from "../Components/Text/Text";
import ContentBox from "../Components/ContentBox/ContentBox";

export default function Home(){
    //<TitleBar userid="0"/>
    return (
        <>
            <TitleBar userid={undefined}/>
            
            <Content>
                <ContentBox width={50}>
                    <Button click={()=>{}} fontSize={TextSize.MEDIUM} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Hola</Button>
                </ContentBox>
                <ContentBox width={25}>
                    <Text fontSize={TextSize.MEDIUM} link={null}>Texto</Text>
                    
                    <Text fontSize={TextSize.MEDIUM} link={null}>Texto</Text>
                    <Button click={()=>{}} fontSize={TextSize.MEDIUM} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Hola</Button>

                </ContentBox>
            </Content>
        </>
    );
}