document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated",{
        speed: 100, 
        String: "front-end",
    }).go()
})
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated1",{
        speed: 100, 
        String: "front-end",
    }).go()
})

document.addEventListener("DOMContentLoaded", function() {
    // Selecione todas as seções com barras de progresso
    const skillSections = document.querySelectorAll('.skill-item');
    
    // Função para iniciar a animação das barras de progresso
    function startProgressAnimation(entry) {
      const progressBar = entry.target.querySelector('.progress-bar');
      const progressText = entry.target.querySelector('.progress-text');
      const progressElement = entry.target.querySelector('.progress');
      const maxProgress = parseInt(progressElement.getAttribute('data-progress'));
  
      // Define a largura máxima da animação para a barra de progresso
      progressBar.style.setProperty('--progress', maxProgress + '%');
  
      // Função para animar o texto da porcentagem
      function animateProgressText() {
        let progress = 0;
        const duration = 2000; // Duração da animação em milissegundos
        const stepTime = 50; // Intervalo de atualização em milissegundos
        const step = maxProgress / (duration / stepTime);
  
        function updateText() {
          if (progress < maxProgress) {
            progress += step;
            if (progress > maxProgress) progress = maxProgress;
            progressText.textContent = Math.round(progress) + '%';
            setTimeout(updateText, stepTime);
          } else {
            progressText.textContent = maxProgress + '%';
          }
        }
  
        updateText();
      }
  
      animateProgressText(); // Inicia a animação do texto da porcentagem
    }
  
    // Cria um Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startProgressAnimation(entry); // Inicia a animação quando o elemento está visível
          observer.unobserve(entry.target); // Para observar o elemento após a animação começar
        }
      });
    }, { threshold: 0.1 }); // Ajuste o threshold conforme necessário
  
    // Observa cada seção de habilidade
    skillSections.forEach(section => {
      observer.observe(section);
    });
  });
  
  