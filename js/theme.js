function initTheme() {
    const body = document.body;
    const themeSwitch = document.getElementById("themeSwitch");

    const savedTheme = localStorage.getItem("theme") || "light";
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);

    if (themeSwitch) {
        themeSwitch.checked = savedTheme === "dark";

        themeSwitch.onchange = () => {
            const isDark = body.classList.contains("dark");

            if (isDark) {
                body.classList.remove("dark");
                body.classList.add("light");
                localStorage.setItem("theme", "light");
            } else {
                body.classList.remove("light");
                body.classList.add("dark");
                localStorage.setItem("theme", "dark");
            }

            document.dispatchEvent(new Event("themeChanged"));
        };
    }

    document.dispatchEvent(new Event("themeChanged"));
}

document.addEventListener("DOMContentLoaded", initTheme);

document.addEventListener("themeChanged", () => {
    if (typeof generateWeeklyRings === "function") {
        generateWeeklyRings();
    }
});
