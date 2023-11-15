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
import Producto from "../types/Producto";
import { ProductoService } from "../services/ProductoService";
import TextField from "../Components/TextField/TextField";
import { TextFieldType } from "../Components/TextField/TextFieldType";
import ComboBox from "../Components/ComboBox/ComboBox";
import RubroProducto from "../types/RubroProducto";
import { RubroProductoService } from "../services/RubroProductoService";
import ComboBoxItem from "../Components/ComboBox/ComboBoxItem";
import { useLocation } from "react-router-dom";
import DetalleReceta from "../types/DetalleReceta";
import { InsumoService } from "../services/InsumoService";
import Insumo from "../types/Insumo";


export default function ModificarProducto() {

    const [producto, setProducto] = useState<Producto>();
    const [rubrosProducto, setRubrosProducto] = useState<RubroProducto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [nuevo, setNuevo] = useState<boolean>();
    const [id, setId] = useState<number>()

    const [detalles, setDetalles] = useState<DetalleReceta[]>([]);
    const [insumos, setInsumos] = useState<Insumo[]>([]);

    let {search} = useLocation();

    useEffect(() => {
        (async () => {
            setRubrosProducto(await RubroProductoService.getRubrosProducto());
            setInsumos(await InsumoService.getInsumos());

            let query = new URLSearchParams(search);
            let tmpNuevo = query.get("accion");            
            if (tmpNuevo === "crear") {
                setNuevo(true);
            } else if (tmpNuevo === "modificar") {                            
                let tmpId = query.get("id");
                if(tmpId === null) {
                    window.location.href = "/";
                } else {
                    setId(parseInt(tmpId));
                }
                setNuevo(false); 
            } else {
                window.location.href = "/";
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (nuevo) {
                setProducto({
                    id: null,
                    fechaAlta: new Date(),
                    fechaModificacion: null,
                    fechaBaja: null,
                    denominacion: "",
                    descripcion: "",
                    tiempoEstimadoCocina: 0,
                    precioVenta: 0,
                    costo: 0,
                    urlImagen: "",
                    rubroProducto: null,
                    receta: {
                        id: null,
                        fechaAlta: new Date(),
                        fechaModificacion: null,
                        fechaBaja: null,
                        descripcion: "",
                        detalles: []
                    }
                });
            } else {
                if(id === undefined) return;
                const p = await ProductoService.getProducto(id);
                setProducto(p);
                setDetalles(p.receta.detalles);
            }
            setIsLoading(false);
        })();
    }, [nuevo]);

    function agregarIngrediente() {
        let nd : DetalleReceta[] = detalles;
        detalles.push({
            id: null,
            fechaAlta: new Date(),
            fechaModificacion: null,
            fechaBaja: null,
            cantidad: 0,
            costo: 0,
            insumo: null
        });

        
        setDetalles([...nd]);
    }

    async function aceptar() {
        if (nuevo) {
            if (producto === undefined) return;
            producto.receta.detalles = detalles;
            console.log(producto);
            await ProductoService.createProducto(producto)

        } else {
            if (producto === undefined || id === undefined) return;
            producto.receta.detalles = detalles;
            await ProductoService.updateProducto(id, producto)
        }
        window.location.href = "/AdministrarProductos";
    }

    return (

        <>
            <TitleBar />

            <Content>
                <>{isLoading || producto === undefined ? "" : (
                    <ContentBox width={100}>
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.START}>
                            <Text fontSize={TextSize.MEDIUM} link={null}>Modificar</Text>
                        </Flex>

                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null}>Nombre</Text>
                            <TextField placeholder={""} type={TextFieldType.SINGLELINE} value={producto?.denominacion} setValue={(v: string) => { producto.denominacion = v }} />
                            <ComboBox placeholder={"Rubro"} default={producto.rubroProducto!== null ? producto.rubroProducto.id : undefined} change={(id: number) => {
                                (async() => {
                                    const rp = await RubroProductoService.getRubroProducto(id);
                                    producto.rubroProducto = rp;
                                })();
                            }}>
                                {rubrosProducto.map(
                                    (rubroProducto) => (
                                        <ComboBoxItem key={rubroProducto.id} id={rubroProducto.id}> {rubroProducto.denominacion}</ComboBoxItem>
                                    )
                                )}
                            </ComboBox>
                        </Flex>


                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Text fontSize={TextSize.SMALL} link={null}>Descripción</Text>
                            <TextField placeholder={""} type={TextFieldType.SINGLELINE} value={producto.descripcion === null ? "" : producto.descripcion} setValue={(v: string) => { producto.descripcion = v }} />
                            <Text fontSize={TextSize.SMALL} link={null}>Precio $</Text>
                            <TextField placeholder={""} type={TextFieldType.SINGLELINE} value={producto.precioVenta.toString()} setValue={(v: string) => { producto.precioVenta = parseInt(v) }} />
                        </Flex>
                        
                        <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                            <Flex direction={FlexDirection.COLUMN} align={FlexAlign.EXTREMES} width={50}>
                                <Text fontSize={TextSize.SMALL} link={null}>Receta</Text>
                                <TextField placeholder={""} type={TextFieldType.MULTILINE} value={producto.receta.descripcion} setValue={(v: string) => { producto.receta.descripcion = v }} />

                                <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                    <Text fontSize={TextSize.SMALL} link={null}>Tiempo de cocina</Text>
                                    <TextField placeholder={""} type={TextFieldType.SINGLELINE} value={producto.tiempoEstimadoCocina !== null ? ""+producto.tiempoEstimadoCocina : ""} setValue={(v: string) => { producto.tiempoEstimadoCocina = Number(v) }} />
                                </Flex>

                                <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                    <Text fontSize={TextSize.SMALL} link={null}>Seleccionar imagen</Text>
                                    <TextField placeholder={""} type={TextFieldType.SINGLELINE} value={producto.urlImagen} setValue={(v: string) => { producto.urlImagen = v }} />
                                </Flex>
                            </Flex>

                            <Flex direction={FlexDirection.COLUMN} align={FlexAlign.EXTREMES} width={50}>
                                <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                                    <Text fontSize={TextSize.SMALL} link={null}>Ingredientes</Text>
                                </Flex>

                                <Flex direction={FlexDirection.COLUMN} align={FlexAlign.EXTREMES}>
                                    {detalles.map((detalle) => (
                                        <Flex key={detalle.id} direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                            <ComboBox placeholder={"Ingrediente"} default={detalle.insumo !== null ? detalle.insumo.id : undefined} change={(id:number) => {
                                                (async() => {
                                                    const ins = await InsumoService.getInsumo(id);
                                                    detalle.insumo = ins;
                                                })();
                                            }}>
                                                {insumos.map(
                                                    (insumo) => (
                                                        <ComboBoxItem key={insumo.id} id={insumo.id}> {insumo.denominacion}</ComboBoxItem>
                                                    )
                                                )}
                                            </ComboBox>
                                            <TextField placeholder={""} type={TextFieldType.SINGLELINE} value={"" + detalle.cantidad} setValue={(v: string) => { detalle.cantidad = parseInt(v) }} />
                                            <Text fontSize={TextSize.SMALL} link={null}>{detalle.insumo !== null ? detalle.insumo.unidadMedida.abreviatura : ""}</Text>
                                        </Flex>
                                    ))}
                                </Flex>

                                <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                    <Text fontSize={TextSize.SMALL} link={null}>Costo total: ${(()=>{
                                        let ct = 0;
                                        detalles.forEach(d => {
                                            if(d.insumo !== null && d.insumo.precioCompra !== undefined)
                                                ct += d.cantidad * d.insumo.precioCompra;
                                        });
                                        return ct;
                                    })()}</Text>
                                </Flex>

                                <Flex direction={FlexDirection.ROW} align={FlexAlign.EXTREMES}>
                                    <Button click={agregarIngrediente} color={ButtonColor.DARK} width={ButtonWidth.FILL} fontSize={TextSize.SMALLER}>Agregar ingrediente</Button>
                                </Flex>

                            </Flex>
                        </Flex>


                        <Flex direction={FlexDirection.ROW} align={FlexAlign.CENTER}>
                            <Button click={()=>{window.location.href="/AdministrarProductos"}} color={ButtonColor.DARK} width={ButtonWidth.HUG} fontSize={TextSize.SMALLER}>Cancelar</Button>
                            <Button click={aceptar} color={ButtonColor.ALT} width={ButtonWidth.HUG} fontSize={TextSize.SMALLER}>Aceptar</Button>
                        </Flex>
                    </ContentBox>
                )}
                </>
            </Content>

            <Footer />
        </>
    );

}