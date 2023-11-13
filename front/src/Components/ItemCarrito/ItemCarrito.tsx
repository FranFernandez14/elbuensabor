import { IconContext } from "react-icons"
import DetallePedido from "../../types/DetallePedido"
import Button from "../Button/Button"
import { ButtonColor } from "../Button/ButtonColor"
import { ButtonWidth } from "../Button/ButtonWidth"
import Flex from "../Flex/Flex"
import { FlexAlign } from "../Flex/FlexAlign"
import { FlexDirection } from "../Flex/FlexDirection"
import Text from "../Text/Text"
import { TextSize } from "../Text/TextSize"
import "./ItemCarrito.css"
import {FaPlus, FaMinus} from "react-icons/fa"
import Image from "../Image/Image"
import { ImageShape } from "../Image/ImageShape"

export default function ItemCarrito(props: {
    detalle: DetallePedido,
    compacto?: boolean,
    setCantidad: (cantidad: number) => void
}) {


    function changeCantidad(c: number): void {
        if(c>=0) {
            props.setCantidad(c);
        }
    }

    if (props.compacto === true) {
        return (
            <tr className="ItemCarrito">
                <td><Image src={props.detalle.producto.urlImagen} shape={ImageShape.ROUNDED} height="40px" width="40px"/></td>
                <td><Text fontSize={TextSize.SMALLER}>{props.detalle.producto.denominacion}</Text></td>
                <td>
                    <IconContext.Provider value={{size: "10px"}}>
                        <Flex direction={FlexDirection.COLUMN} align={FlexAlign.EXTREMES}>
                            <button className="pm" onClick={()=>{changeCantidad(props.detalle.cantidad + 1)}} style={{fontSize: "10px", lineHeight: "10px"}}><FaPlus /></button>
                            <button className="pm" onClick={()=>{changeCantidad(props.detalle.cantidad - 1)}} style={{fontSize: "10px", lineHeight: "10px"}}><FaMinus /></button>
                        </Flex>
                    </IconContext.Provider>
                </td>
                <td><Text fontSize={TextSize.SMALLER}>N.° {props.detalle.cantidad}</Text></td>
                <td><Text fontSize={TextSize.SMALLER}>${props.detalle.subtotal}</Text></td> 
            </tr>
        )
    } else {
        return (
            <tr className="ItemCarrito">
                <td><Image src={props.detalle.producto.urlImagen} shape={ImageShape.ROUNDED} height="60px" width="60px"/></td>
                <td><Text fontSize={TextSize.SMALLER}>{props.detalle.producto.denominacion}</Text></td>
                <td><Text fontSize={TextSize.SMALLER}>P.U. ${props.detalle.producto.precioVenta}</Text></td>
                <td>
                    <IconContext.Provider value={{size: "20px"}}>
                        <Flex direction={FlexDirection.COLUMN} align={FlexAlign.EXTREMES}>
                            <button className="pm" onClick={()=>{changeCantidad(props.detalle.cantidad + 1)}}><FaPlus /></button>
                            <button className="pm" onClick={()=>{changeCantidad(props.detalle.cantidad - 1)}}><FaMinus /></button>
                        </Flex>
                    </IconContext.Provider>
                </td>
                <td><Text fontSize={TextSize.SMALLER}>{props.detalle.cantidad} unidades</Text></td>
                <td><Text fontSize={TextSize.SMALLER}>${props.detalle.subtotal}</Text></td>
                <td><Button color={ButtonColor.DARK} click={function (): void {changeCantidad(0)} } fontSize={TextSize.SMALLER} width={ButtonWidth.HUG}>Quitar</Button></td>           
                
                
                
            </tr>
        )
    }
    
}