const toggleSidebarButton = document.getElementById("toggle-sidebar");
const sidebar = document.querySelector(".floating-sidebar");

toggleSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");  // Alterna a classe "open" para mostrar/ocultar a sidebar
});
