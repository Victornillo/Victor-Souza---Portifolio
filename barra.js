document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active de todos os botões e painéis
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabPanels.forEach(panel => panel.classList.remove("active"));

      // Ativa o botão clicado e o painel correspondente
      button.classList.add("active");
      const tabTarget = button.getAttribute("data-tab");
      document.getElementById(tabTarget).classList.add("active");
    });
  });
});

