window.addEventListener("load", () => {
    let cbs = [];
    cbs = Array.prototype.concat.apply(cbs, document.getElementsByClassName("ContentBox"));
    cbs = Array.prototype.concat.apply(cbs, document.getElementsByClassName("OuterContentBox"));
    for(let i = 0; i < cbs.length; i++) {
        let cb = cbs[i];
        let w = cb.dataset.width;
        cb.style.width = w + "%";
    }
});