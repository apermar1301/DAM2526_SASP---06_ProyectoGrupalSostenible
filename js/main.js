




/* Hecho por Jhonatan solo para probar el diagrama visual */
document.addEventListener("DOMContentLoaded", function() {

    const fases = document.querySelectorAll(".fase");
    const popup = document.getElementById("popup");

    fases.forEach(fase => {

        fase.addEventListener("mousemove", (e) => {
            popup.style.display = "block";
            popup.textContent = fase.dataset.info;
            popup.style.left = e.pageX + 10 + "px";
            popup.style.top = e.pageY + 10 + "px";
        });

        fase.addEventListener("mouseleave", () => {
            popup.style.display = "none";
        });

    });

});
