document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("toggleTheme");
    const body = document.body;

    // Verifica se o usuário já escolheu um tema antes
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggleButton.textContent = "🌙 ";
    } else {
        body.classList.remove("dark-mode"); // opcional
        themeToggleButton.textContent = "☀️ ";
    }

    themeToggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Salva a escolha do usuário no localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggleButton.textContent = "🌙 ";
        } else {
            localStorage.setItem("theme", "light");
            themeToggleButton.textContent = "☀️ ";
        }
    });
});
