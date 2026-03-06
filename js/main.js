




/* DIAGRAMA VISUAL */
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


/* MAPA */
document.addEventListener("DOMContentLoaded", function () {

    let totalPuntos = 0;

    const botones = document.querySelectorAll(".btn-reciclar");
    const contador = document.getElementById("contadorPuntos");
    const ranking = document.getElementById("misPuntosRanking");

    botones.forEach(boton => {

        boton.addEventListener("click", function () {

            const puntos = parseInt(boton.dataset.puntos);
            totalPuntos += puntos;

            contador.innerText = totalPuntos + " puntos";
            ranking.innerText = totalPuntos;

        });

    });

});