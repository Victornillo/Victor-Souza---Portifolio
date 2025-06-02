document.addEventListener("DOMContentLoaded", () => {
    const elementsToTranslate = [
        "about",
        "abilities",
        "contact",
        "MySocialNetwork",
        "myname",
        "knowledge",
        "schedule",
        "programacaoo",
        "myname",
        "ocupation",
        "im",
        "about_me",
        "my_socials",
        "hello",
        "name",
        "role",
        "bio",
        "download_cv",
        "languages",
        "myLast",
        "all",
        "linktree",
        "pinterest",
        "todo",
        "eu2"
    ];

    const languageSelector = document.getElementById("languageSelector");

    async function loadTranslations(lang) {
        try {
            const response = await fetch("translations.json");
            const translations = await response.json();

            elementsToTranslate.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    element.innerText = translations[lang][id];
                }
            });
        } catch (error) {
            console.error("Erro ao carregar as traduções:", error);
        }
    }

    
    loadTranslations("pt");

    
    languageSelector.addEventListener("change", (event) => {
        loadTranslations(event.target.value);
    });
});
