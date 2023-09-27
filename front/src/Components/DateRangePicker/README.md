# Componente DatePicker

## Instalación

Este componente fue tomado de la librería RSuite.
Para instalarla en la máquina local, se debe ejecutar el comando:

```
npm i rsuite --save
```

Además, esta librería tiene a less como dependencia. Para instalarla, ejecutar:

```
npm install -g less
```

## Uso del componente

Realizar los siguientes imports:

``` javascript
import { DateRangePicker } from "rsuite";
import "../Components/DateRangePicker/DateRangePicker.less"
```

Crear el componente:

``` JSX
    <DateRangePicker/>
```

Atributos comunes:

* style: equivalente al atributo style por defecto de React, para definir estilos inline
* value ([Date, Date]): fechas por defecto de inicio y fin del rango
* onChange: función que toma como argumento un valor DateRange | null y no devuelve nada. Es llamada siempre que se cambia el rango de fechas seleccionado.
* ranges: arreglo de [Range](https://rsuitejs.com/components/date-range-picker/#code-ts-range-code)

Para ver todos los atributos, visitar [Documentación](https://rsuitejs.com/components/date-range-picker/)

## Ejemplo

``` JSX
import { DateRangePicker } from "rsuite";
import { DateRange } from "rsuite/esm/DateRangePicker";
import "../Components/DateRangePicker/DateRangePicker.less"

export default function Ejemplo(){

    const [dateRange, setDateRange] = useState<DateRange>([new Date(), new Date()]);

    function changeDates(value: DateRange | null) : void {
        if(value !== null) {
            setDateRange(value);
        }
    }

    return (
        <DateRangePicker onChange={changeDates} ranges={[]}/>
    );
}
```