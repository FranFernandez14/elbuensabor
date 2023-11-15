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
import Table from "../Components/Table/Table";
import { TableStyle } from "../Components/Table/TableStyle";
import { useEffect, useState } from "react";
import { TextColor } from "../Components/Text/TextColor";
import Producto from "../types/Producto";
import { ProductoService } from "../services/ProductoService";
import Google from "../Components/Google/Google";
import TextField from "../Components/TextField/TextField";
import Hr from "../Components/Hr/Hr";
import { TextFieldType } from "../Components/TextField/TextFieldType";


export default function ModificarProducto(){

    const [producto, setProducto] = useState<Producto>({

            id: 1,
            fechaAlta: new Date(),
            fechaModificacion: new Date(),
            fechaBaja: new Date(),
            denominacion: "",
            descripcion: "",
            tiempoEstimadoCocina: 20,
            precioVenta: 0,
            costo: 0,
            urlImagen: "",
            receta: {
               id: 1,
               fechaAlta: new Date(),
               fechaModificacion: new Date(),
               fechaBaja: new Date(),
               descripcion: "",
               detalles: []
                    
               }
            }

    );
       async function crearProducto() {
            await ProductoService.createProducto(producto)
            
       }

       async function modificarProducto() {
            await ProductoService.updateProducto(1,producto)
       }

       return(

          <>
            <TitleBar/>
            
            <Content>
                <div className="customContentBox" style={
                    {
                        width: "30%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "12px",
                        maxHeight: "100%",
                        boxSizing: "border-box"
                    }
                }>
                    <ContentBox width={100}>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Text fontSize={TextSize.MEDIUM} link={null}>Modificar</Text>
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Google/>
                        </Flex>

                        <Hr/>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Denominación"} type={TextFieldType.SINGLELINE} value={producto.denominacion} setValue={(v: string) => {producto.denominacion = v}}/>
                            <TextField placeholder={"Descripción"} type={TextFieldType.SINGLELINE} value={producto.descripcion} setValue={(v: string) => {producto.descripcion = v}}/>
                            <TextField placeholder={"Tiempo estimado de cocina"} type={TextFieldType.SINGLELINE}  
                            value={""+producto.tiempoEstimadoCocina} setValue={(v: number) => {producto.tiempoEstimadoCocina = v}}/>
             
                            








                            <TextField placeholder={"Departamento"} type={TextFieldType.SINGLELINE}  value={request.domicilio.localidad} setValue={(v: string) => {request.domicilio.localidad = v}}/>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Dirección"} type={TextFieldType.SINGLELINE}  value={request.domicilio.calle} setValue={(v: string) => {request.domicilio.calle = v}}/>
                        </Flex>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <TextField placeholder={"Correo"} type={TextFieldType.SINGLELINE} value={request.email} setValue={(v: string) => {request.email = v}}/>
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Button click={()=>{window.location.href="/";}} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.LIGHT}>Cancelar</Button>
                            <Button click={registrarse} fontSize={TextSize.SMALL} width={ButtonWidth.HUG} color={ButtonColor.ALT}>Aceptar</Button>
                        </Flex>

                        
                    </ContentBox>
                    <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                        <Text fontSize={TextSize.SMALLER} link={null}>¿Ya está registrado?</Text>
                        <Text fontSize={TextSize.SMALLER} link={"login"}>Iniciar Sesión</Text>
                    </Flex>
                </div>
            </Content>

            <Footer/>
        </>
       );
   
}