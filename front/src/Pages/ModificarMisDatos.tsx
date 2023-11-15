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
import TextField from "../Components/TextField/TextField";
import { TextFieldType } from "../Components/TextField/TextFieldType";
import { useEffect, useState } from "react";
import Persona from "../types/Persona";
import { AuthService } from "../services/AuthService";
import { PersonaService } from "../services/PersonaService";



export default function ModificarMisDatos() {

    const [persona, setPersona] = useState<Persona>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const p: Persona | null = await AuthService.getCurrentUser();
            if (p === null) { window.location.href = "/login"; return; };
            setPersona(p);
            console.log(persona);
            setIsLoading(false);
        })();
    }, []);

    async function modificar() {
        if(persona!== undefined && persona?.id!==null){
            await PersonaService.updatePersona(persona.id, persona);
        }
    }



    return (
        <>

            <TitleBar />

            <Content>
                <>  {isLoading || persona === undefined ? "" : (
                    <ContentBox width={70}>


                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.MEDIUM} link={null}>Modificar Mis Datos</Text>
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null}>{persona?.nombre} {persona?.apellido} - {persona?.rol}</Text>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null}>E-mail</Text>
                            <TextField
                                placeholder={persona?.email !== undefined ? persona?.email : ""}
                                type={TextFieldType.SINGLELINE}
                                value={persona?.email}
                                setValue={(v: string) => { persona.email = v }}
                            />
                            <Text fontSize={TextSize.SMALL} link={null}>Teléfono</Text>
                            <TextField
                                placeholder={persona?.telefono !== undefined ? persona?.telefono : ""}
                                type={TextFieldType.SINGLELINE}
                                value={persona?.telefono}
                                setValue={(v: string) => { persona.telefono = v }}
                            />
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null}>Calle</Text>
                            <TextField
                                placeholder={persona?.domicilios[0]?.calle !== undefined ? persona?.domicilios[0]?.calle : ""}
                                type={TextFieldType.SINGLELINE}
                                value={persona?.domicilios[0]?.calle}
                                setValue={(v: string) => { persona.domicilios[0].calle = v }}
                            />
                            <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                <Text fontSize={TextSize.SMALL} link={null}>Número</Text>
                                <TextField  
                                    placeholder={"" + (persona?.domicilios[0]?.numero !== undefined ? persona?.domicilios[0]?.numero : "")}
                                    type={TextFieldType.SINGLELINE}
                                    value={"" + persona?.domicilios[0]?.numero}
                                    setValue={(v: string) => { persona.domicilios[0].numero = Number(v) }}
                                />
                            </Flex>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                <Text fontSize={TextSize.SMALL} link={null}>Piso</Text>
                                <TextField
                                    placeholder={"" + (persona?.domicilios[0]?.pisoDpto !== undefined ? persona?.domicilios[0]?.pisoDpto : "")}
                                    type={TextFieldType.SINGLELINE}
                                    value={"" + persona?.domicilios[0]?.pisoDpto}
                                    setValue={(v: string) => { persona.domicilios[0].pisoDpto = Number(v) }}
                                />
                                <Text fontSize={TextSize.SMALL} link={null}>Departamento</Text>
                                <TextField
                                    placeholder={"" + (persona?.domicilios[0]?.numeroDpto !== undefined ? persona?.domicilios[0]?.numeroDpto : "")}
                                    type={TextFieldType.SINGLELINE}
                                    value={"" + persona?.domicilios[0]?.numeroDpto}
                                    setValue={(v: string) => { persona.domicilios[0].numeroDpto = Number(v) }}
                                />
                            </Flex>


                            <Text fontSize={TextSize.SMALL} link={null}>Localidad</Text>
                            <TextField
                                placeholder={persona?.domicilios[0]?.localidad !== undefined ? persona?.domicilios[0]?.localidad : ""}
                                type={TextFieldType.SINGLELINE}
                                value={persona?.domicilios[0]?.localidad}
                                setValue={(v: string) => { persona.domicilios[0].localidad = v }}
                            />
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Button click={()=>{window.location.href="/MisDatos"}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Cancelar</Button>
                            <Button click={modificar} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Aceptar</Button>
                        </Flex>


                    </ContentBox>
                )}</>
            </Content>

            <Footer />
            )
        </>
    );
}