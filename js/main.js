/* ======================================================
   ACORDEONES ODS Y SECCIONES DESPLEGABLES – Daniel
   ====================================================== */
document.addEventListener("DOMContentLoaded", () => {
    console.log("JS listo");

    // ACORDEONES ODS
    const toggles = document.querySelectorAll(".ods-toggle");
    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const card = toggle.parentElement;
            const isActive = card.classList.contains("active");

            document.querySelectorAll(".ods-card").forEach(item => item.classList.remove("active"));

            if (!isActive) card.classList.add("active");
        });
    });

    // DIAGRAMA CICLO DE VIDA
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

    // SIMULADOR MAPA
    let totalPuntos = 0;
    const botones = document.querySelectorAll(".btn-reciclar");
    const contador = document.getElementById("contadorPuntos");
    const ranking = document.getElementById("misPuntosRanking");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const puntos = parseInt(boton.dataset.puntos);
            totalPuntos += puntos;

            if (contador) contador.innerText = totalPuntos + " puntos";
            if (ranking) ranking.innerText = totalPuntos;
        });
    });
});