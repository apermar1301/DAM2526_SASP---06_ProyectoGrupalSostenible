/* ======================================================
   ACORDEONES ODS Y SECCIONES DESPLEGABLES – Daniel
   ====================================================== */
document.addEventListener("DOMContentLoaded", () => {
    console.log("JS listo");

    const toggles = document.querySelectorAll(".ods-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const card = toggle.parentElement;
            const isActive = card.classList.contains("active");

            document.querySelectorAll(".ods-card").forEach(item => {
                item.classList.remove("active");
            });

            if (!isActive) {
                card.classList.add("active");
            }
        });
    });
});

