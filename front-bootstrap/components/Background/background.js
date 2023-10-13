window.addEventListener("load", () => {
    let bg = document.createElement("div");
    bg.classList.add("bg");
    bg.innerHTML = "<div></div>";
    document.body.prepend(bg);
});