window.addEventListener("load", () => {

    let tb = document.createElement("div");
    tb.classList.add("Footer");
    tb.classList.add("container-fluid");
    tb.classList.add("bg-dark");
    tb.classList.add("text-light");

    tb.innerHTML = `
        <div>
            Ubicación Calle Inventada 11 / Restaurante El Buen Sabor
        </div>
        <div>
            Tel. 261 111 1111
        </div>
        <div>
            Redes: 
            <a href="https://www.twitter.com"><img src="/front-bootstrap/images/twittericon.png"></a>
            <a href="https://www.facebook.com"><img src="/front-bootstrap/images/facebookicon.svg"></a>
            <a href="https://www.instagram.com"><img src="/front-bootstrap/images/instagramicon.png"></a>
        </div>
    `;

    document.body.prepend(tb);
});