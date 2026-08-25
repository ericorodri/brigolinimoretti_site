'use strict';

document.addEventListener("DOMContentLoaded", () => {
    // Captura o botão usando a classe correta configurada no HTML
    const switcher = document.querySelector('.btn-theme-switcher');
    
    if (switcher) {
        switcher.addEventListener('click', function() {
            // Liga/Desliga o tema escuro no body
            document.body.classList.toggle('dark-theme');
            
            // Verifica o estado atual para mudar o rótulo do botão
            if (document.body.classList.contains('dark-theme')) {
                this.textContent = "muito elegante";
            } else {
                this.textContent = "extremamente chique";
            }
        });
    }

    // Garante que o autoplay do vídeo institucional funcione mutado
    const videoDestaque = document.querySelector(".container-midia video");
    if (videoDestaque) {
        videoDestaque.play().catch(() => {
            videoDestaque.muted = true;
            videoDestaque.play();
        });
    }
});
