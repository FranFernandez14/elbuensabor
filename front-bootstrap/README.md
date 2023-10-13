# Guía de uso del front-end sin React

## Setup

Para desarrollar en este proyecto con Bootstrap en Visual Studio Code, se requieren las siguientes extensiones:

* [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* [Autoprefixer](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer)

Teniendo activado el Live Server, los cambios en los archivos provocarán que la página actual se refresce automáticamente; y el Live Sass Compiler activado provocará que cada vez que se guarde algún archivo .scss, este será compilado nuevamente.

En cada archivo HTML, se requiere en su encabezado:

``` html
    <head>
        <title>El Buen Sabor</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/styles.css">
    </head>
```

Además, se requiere al final del cuerpo (body):

``` html
    <script src="bootstrap-5.3.2/dist/js/bootstrap.bundle.js"></script>
```

## Componentes

Si bien Bootstrap provee muchas clases útiles para crear componentes típicos cómodamente, hay algunos que necesitamos frecuentemente y no son ofrecidos por este framework. Por esto, en la carpeta "/components" se ubican los archivos fuente de los siguientes componentes creados por nosotros.

### Background

Genera el fondo de los sitios.

Para utilizarlo, se debe colocar en algún lugar de la página la siguiente etiqueta:

``` html
    <script src="components/Background/background.js"></script>
```

### Content

Genera el contenedor principal a ser usado en la mayoría de las páginas.

Para usarlo, se debe crear en la página HTML el siguiente elemento, directamente en el `<body></body>`:

``` html
    <div class="Content">
        <!-- Contenido... -->
    </div>
```

### ContentBox

Genera subcontenedores dentro de Content, con un fondo violeta claro y cuyo contenido se muestra en una columna.

Si se desea indicar un ancho en particular para algún ContentBox, se debe incluir el siguiente código en la página:

``` html
    <script src="components/ContentBox/contentbox.js"></script>
```

Para añadir los ContentBox, se debe escribir código como el siguiente

``` html
    <div class="Content">
        <div class="ContentBox" data-width="50">
            <!-- Contenido del primer ContentBox -->
        </div>
        <div class="ContentBox">
            <!-- Contenido del segundo ContentBox -->
        </div>
    </div>
```

El atributo `data-width` debe ser un número entre 0 y 100, representando un porcentaje del ancho del componente Content. Si no se lo especifica, el ancho del ContentBox se ajustará a su contenido.

También se puede colocar un ContentBox dentro de un OuterContentBox, sin agregar ningún otro archivo de javascript, de la siguiente forma:

``` html
    <div class="Content">
        <div class="OuterContentBox">
            <!-- Contenido antes del ContentBox -->
            <div class="ContentBox" data-width="50">
                <!-- Contenido del ContentBox -->
            </div>
            <!-- Contenido después del ContentBox -->
        </div>
    </div>
```

Así, se puede agregar contenido arriba o abajo del ContentBox.

OuterContentBox también soporta al atributo `data-width`.

### TitleBar

Genera la barra superior. Varía según el rol del usuario.

Requiere el siguiente código en la página HTML, preferentemente al final del `<body></body>`:

``` html
    <script>
        const TitleBar = {
            userid: //Valor de la id del usuario
        }
    </script>
    <script src="components/TitleBar/titlebar.js"></script>
```

Dependiendo del valor de TitleBar.userid es como se mostrará el componente. De ser _undefined_, se considerará que el usuario no ha iniciado sesión 

### Footer

Genera el footer.

Para usarlo, solo se requiere agregar la siguiente línea a la página HTML:

``` html
    <script src="components/Footer/footer.js"></script>
```