let titleBarMenuVisible = false;

window.addEventListener("load", () => {

    let tb = document.createElement("div");
    tb.classList.add("TitleBar");
    tb.classList.add("container-fluid");
    tb.classList.add("bg-dark");
    tb.classList.add("text-light");

    tb.innerHTML = `
        <h1 onclick="window.location.href='/front-bootstrap/'" style="cursor:pointer;">El Buen Sabor</h1>
    `;

    if(TitleBar.userid === undefined) {
        tb.innerHTML += `
            <div>
                <h2><a href="/front-bootstrap/pages/login.html">Iniciar Sesión</a></h2>
                <h2><a href="/front-bootstrap/pages/registrarse.html">Registrarse</a></h2>
            </div>
        `;
    } else {
        tb.innerHTML += `
            <div>
                <h2>Cosme Fulanito</h2>
                <image id="TitleBarUserIcon" src="/front-bootstrap/images/usericon.svg" class="rounded-circle">
                <div class="TitleBarMenu">
                    <h5><a href="/front-bootstrap/pages/misDatos.html">Mi perfil</a></h5>
                    <h5><a>Historial de pedidos</a></h5>
                    <h5><a>Desconectarme</a></h5>
                </div>
            </div>
        `;
    }

    document.body.prepend(tb);

    let userIcon = document.getElementById("TitleBarUserIcon");
    if(userIcon !== null) {
        userIcon.addEventListener("click", () => {
            titleBarMenuVisible = !titleBarMenuVisible;
            let menu = tb.getElementsByClassName("TitleBarMenu")[0].style;
            menu.transform = titleBarMenuVisible ? "translateX(0)" : "translateX(100%)";
            menu.opacity = titleBarMenuVisible ? "1" : "0";
        });
    }
});