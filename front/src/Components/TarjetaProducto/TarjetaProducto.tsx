import Producto from "../../types/Producto"
import "./TarjetaProducto.css"
import Image from "../Image/Image"
import Text from "../Text/Text"
import { TextColor } from "../Text/TextColor"
import Button from "../Button/Button"
import { ButtonColor } from "../Button/ButtonColor"
import { TextSize } from "../Text/TextSize"
import { ButtonWidth } from "../Button/ButtonWidth"
import { ImageShape } from "../Image/ImageShape"

export default function TarjetaProducto(props: {
    producto: Producto,
    addToCart: (p: Producto) => void
}) {

    let hayStock: boolean = true;
    let detalles = props.producto.receta.detalles;
    detalles.forEach(detalle => {
        if(detalle.cantidad > detalle.insumo.stockActual) 
            hayStock = false;
    });

    return (
        <div className="TarjetaProducto">
            <Image src={props.producto.urlImagen} shape={ImageShape.ROUNDED} width="152px" height="152px"/>
            <div>
                <div>
                    <Text color={TextColor.LIGHTER} fontSize={TextSize.SMALLER}>
                        {props.producto.denominacion} - {props.producto.precioVenta}
                    </Text>
                </div>
                <div>
                    {hayStock?"":(<Text color={TextColor.ALT} fontSize={TextSize.SMALLER}>Sin Stock</Text>)}
                </div>
            </div>
                
            <Button click={() => props.addToCart(props.producto)} color={ButtonColor.DARK} fontSize={TextSize.SMALLER} width={ButtonWidth.FILL}>Añadir al carrito</Button>
        </div>
    )
}