# Guía de uso de los componentes React

## Text

Formatea texto y permite convertirlo en enlaces.

Propiedades:

* fontSize (TextSize.BIG | TextSize.MEDIUM | TextSize.SMALL): establece el tamaño del texto
* link (string | null): De ser null, el texto no es un enlace. Caso contrario, debe ser la url a la que redirigir
* underlined (boolean): Si hay un link y underlined es false, no se mostrará al link subrayado. Caso contrario, si se lo hará
* color (TextColor.DEFAULT | TextColor.LIGHTER | TextColor.LIGHT | TextColor.DARK | TextColor.ALT): establece el color del texto

Este componente tiene contenido.


## TextField

Genera un campo de texto.

Propiedades:

* placeholder: string a mostrar cuando el campo está vacío
* type (TextFieldType.SINGLELINE | TextFieldType.MULTILINE | TextFieldType.PASSWORD): determina el tipo de campo de texto: de una sola línea (SINGLELINE), de múltiples líneas (MULTILINE) o de contraseña (PASSWORD)
* rows: cantidad de filas (solo aplicable con un campo multilínea)


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


## ComboBox

Genera una lista desplegable.

Atributos:

* placeholder: string con texto a mostrar cuando no se ha seleccionado ninguna opción
* change: función que toma un número y no devuelve nada, ejecutada cada vez que se cambia el item seleccionado pasándole como argumento la id del mismo

Debe contener ComboBoxItems.

## ComboBoxItem


Genera un elemento seleccionable dentro de un ComboBox.

Atributos:

* id: número que permite identificar al item seleccionado. No debería existir múltiples ComboBoxItems con la misma id dentro del mismo ComboBox
* select: función a ejecutar al seleccionar un ComboBoxItem. Se asigna automáticamente dentro de un ComboBox, se la debe ignorar

Este componente tiene contenido.

## Google

Genera el botón "Continuar con Google" para administrar las cuentas de los usuarios



## TitleBar

Genera la barra superior. Varía según el rol del usuario.

Propiedades:

* userid (bigint | undefined): De ser undefined, muestra las opciones para iniciar sesión y registrarse. Si no, busca los datos del usuario cuya id es userid y le ofrece las opciones que le corresponden.

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

## Footer

Genera el footer.