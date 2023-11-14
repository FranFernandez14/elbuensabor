# Guía de uso de los componentes React

## Text

Formatea texto y permite convertirlo en enlaces.

Propiedades:

* fontSize (TextSize.BIG | TextSize.MEDIUM | TextSize.SMALL): establece el tamaño del texto
* link (string | null): De ser null, el texto no es un enlace. Caso contrario, debe ser la url a la que redirigir
* underlined (boolean): Si hay un link y underlined es false, no se mostrará al link subrayado. Caso contrario, si se lo hará
* color (TextColor.DEFAULT | TextColor.LIGHTER | TextColor.LIGHT | TextColor.DARK | TextColor.ALT): establece el color del texto
* align (TextAlign.LEFT | TextAlign.CENTER | TextAlign.RIGHT | TextAlign.JUSTIFY): establece la alineación del texto

Este componente tiene contenido.


## TextField

Genera un campo de texto.

Propiedades:

* placeholder: string a mostrar cuando el campo está vacío
* type (TextFieldType.SINGLELINE | TextFieldType.MULTILINE | TextFieldType.PASSWORD): determina el tipo de campo de texto: de una sola línea (SINGLELINE), de múltiples líneas (MULTILINE) o de contraseña (PASSWORD)
* rows: cantidad de filas (solo aplicable con un campo multilínea)
* value: valor mostrado por defecto en el TextField
* setValue: función que toma como argumento un string y no devuelve nada, que es llamada cada vez que el usuario cambia el valor del campo, pasándole el nuevo valor como argumento. Puede ser un setter definido con un useState
* validate: función que toma como argumento un string y devuelve un booleano, que es llamada cada vez que el usuario cambia el valor del campo, pasándole el nuevo valor como argumento. Si devolviera false, se colocará un borde rojo al campo.


## Button

Genera un botón.

Propiedades:

* fontSize: equivalente a la propiedad fontSize de Text
* color (ButtonColor.LIGHT | ButtonColor.DARK | ButtonColor.ALT): establece el color del botón. LIGHT y DARK son tonalidades de violeta, mientras que ALT es rosado
* click: función a ejecutar al hacer click en el botón
* width (ButtonWidth.HUG | ButtonWidth.FILL | string): establece el ancho del botón. HUG hace que abrace el contenido (tomando el mínimo tamaño posible) y FILL hace que tome todo el ancho disponible. Si se le pasa un string, este debe ser un ancho medido en unidades de css (px, vw, %, etc.)

Este componente tiene contenido.


## Icon

Genera un ícono alineable con texto. Relación de aspecto 1:1.

Propiedades: 

* size (IconSize.BIG | IconSize.MEDIUM | IconSize.SMALL | IconSize.DEFAULT): establece la altura del ícono. BIG, MEDIUM y SMALL son coincidentes con los valores posibles de fontSize de Text. DEFAULT hace que tome la mayor altura posible en el contenedor
* src (string): cadena con la ruta de acceso a la imagen
* click: función a ejecutar al hacer click en el ícono


## Image

Coloca una imagen.

Propiedades:

* src: ruta a la imagen
* width: string con un valor de tamaño de css correspondiente al ancho
* height: string con un valor de tamaño de css correspondiente al alto
* shape (ImageShape.RECTANGLE | ImageShape.ROUNDED | ImageShape.ELLIPSE): establece la forma del borde de la imagen. RECTANGLE indica esquinas de 90°, ROUNDED redondea levemente las esquinas y ELLIPSE redondea las esquinas lo más posible. Si width fuera igual a height, ELLIPSE hace que la imagen sea un círculo.


## Hr

Genera una regla horizontal.


## ComboBox

Genera una lista desplegable.

Atributos:

* placeholder: string con texto a mostrar cuando no se ha seleccionado ninguna opción
* change: función que toma un número y no devuelve nada, ejecutada cada vez que se cambia el item seleccionado pasándole como argumento la id del mismo
* fullWidth: booleano que indica si la ComboBox debe ocupar todo el ancho disponible

Debe contener ComboBoxItems.

## ComboBoxItem


Genera un elemento seleccionable dentro de un ComboBox.

Atributos:

* id: número que permite identificar al item seleccionado. No debería existir múltiples ComboBoxItems con la misma id dentro del mismo ComboBox
* select: función a ejecutar al seleccionar un ComboBoxItem. Se asigna automáticamente dentro de un ComboBox, se la debe ignorar

Este componente tiene contenido.


## Search

Genera una barra de búsqueda.

Atributos:

* value: valor por defecto a mostrar
* placeholder: texto a mostrar cuando no haya ningún valor
* width (number): ancho del componente, relativo al ancho del padre. Si no se especifica, es 100
* action: función que toma como argumento una cadena. Al hacer click en el ícono de la lupa o presionar enter, se llamará a esta función pasándole el valor del campo


## CheckBox

Genera una caja que se puede marcar y desmarcar.

Atributos:

* label: string que se mostrará a la derecha de la caja
* value: booleano que determina el estado inicial del checkbox
* setValue: función que toma un booleano como argumento y es llamada siempre que el valor cambia


## ItemCarrito

Genera un item de carrito, que permite controlar la cantidad del producto correspondiente.

Debe ser colocado dentro del <tbody> de una <Table> para su correcto funcionamiento.

Atributos:
* detalle: DetallePedido a mostrar
* compacto: booleano que indica qué tamaño debe tener el ItemCarrito, así como la información mostrada
* setCantidad: función que toma un número y no devuelve nada, llamada cada vez que se cambie la cantidad del producto correspondiente


## TarjetaProducto

Genera una tarjeta que muestra los principales datos de un producto y permite añadirlo al carrito. 

Atributos:
* producto: producto a mostrar
* addToCart: función que toma un producto y no devuelve nada, llamada siempre que el botón de la tarjeta "Añadir al carrito" sea presionado


## DateRangePicker

Genera un diálogo para seleccionar un rango de fechas. De la librería RSuite.

[Detalles](./src/Components/DateRangePicker/README.md)


## Google

Genera el botón "Continuar con Google" para administrar las cuentas de los usuarios


## TitleBar

Genera la barra superior. Varía según el rol del usuario.


## Content

Genera el contenedor principal a ser usado en la mayoría de las páginas.

Este componente tiene contenido, el cual es mostrado uno al lado del otro.


## ContentBox

Genera subcontenedores dentro de Content, con un fondo violeta claro y cuyo contenido se muestra en una columna.

Propiedades:

* width (number): porcentaje del ancho del padre que tomará como ancho.

Este componente tiene contenido.


## Flex

Genera un contenedor para facilitar la organización del contenido.

Propiedades:

* direction (FlexDirecion.ROW | FlexDirecion.COLUMN | FlexDirecion.WRAP): establece si los elementos se colocarán en fila de izquierda a derecha (ROW), si podrán continuar en una nueva fila debajo si se ocupa todo el ancho de la fila (WRAP) o si los elementos se colocarán en una columna
* align (FlexAlign.START | FlexAlign.CENTER | FlexAlign.END | FlexAlign.EXTREMES): establece cómo se alinearán los contenidos dentro del contenedor: si desde la izquierda o arriba (START), desde la derecha o abajo (END), en el centro (CENTER) o lo más separados posibles (en los extremos) (EXTREMES)

Este componente tiene contenido.


## Table

Genera una tabla personalizada.

Propiedades:

* width: número entre 0 y 100, para definir el ancho como un porcentaje del ancho del padre
* style (TableStyle.DEFAULT | TableStyle.SEAMLESS | TableStyle.SOLID): define ciertos estilos para la tabla. DEFAULT y SEAMLESS son equivalentes: generan una tabla sin fondo ni bordes de celdas. SOLID le coloca un fondo oscuro y bordes blancos a las celdas
* scrollable: booleano que indica si la tabla genera scrollbars cuando de otro modo tendría un overflow

El contenido de este componente es el mismo que el de un elemento HTML <table>, lo único que cambia son los estilos.


## Footer

Genera el footer.


## Modal

Genera un cuadro de diálogo modal.

Propiedades:

* visible: booleano que indica si el modal está siendo mostrado o no
* maxWidth: string con un valor de tamaño de css correspondiente al máximo ancho del componente

Este componente tiene contenido, y este es tratado de forma similar al de una ContentBox.