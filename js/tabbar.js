function updateActiveTab() {
    console.log("👉 updateActiveTab chiamata");

    const main = document.querySelector("main");
    if (!main) {
        console.log("⚠️ Nessun <main> trovato");
        return;
    }

    console.log("📌 main.className:", main.className);

    let page = "dashboard";

    if (main.classList.contains("dashboard")) page = "dashboard";
    if (main.classList.contains("chatbot")) page = "pagina2";
    if (main.classList.contains("settings")) page = "settings";

    console.log("🔄 Tab attiva:", page);

    document.querySelectorAll(".tab-item").forEach(item => {
        item.classList.toggle("active", item.dataset.tab === page);
    });
}

document.addEventListener("DOMContentLoaded", updateActiveTab);
