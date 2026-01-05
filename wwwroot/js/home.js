// Home.js - JavaScript específico para a página Home
// Equivalente a comportamentos específicos da View Index

(function() {
    'use strict';

    const Home = {
        init: function() {
            console.log('Home page initialized');
            this.setupCardInteractions();
            this.setupHeroAnimations();
        },

        setupCardInteractions: function() {
            // Interações com os cards de projetos e experiências
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.boxShadow = '0 0 30px rgba(99,102,241,0.3)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.boxShadow = 'none';
                });

                // Adicionar clique para expandir informações (futuro)
                card.addEventListener('click', () => {
                    console.log('Card clicked:', card.querySelector('h4').textContent);
                });
            });
        },

        setupHeroAnimations: function() {
            // Animações específicas da seção hero
            const heroText = document.querySelector('.hero-text');
            const heroPhoto = document.querySelector('.hero-photo');
            
            if (heroText && heroPhoto) {
                // Adicionar animações de entrada
                setTimeout(() => {
                    heroText.style.opacity = '1';
                    heroText.style.transform = 'translateY(0)';
                }, 100);

                setTimeout(() => {
                    heroPhoto.style.opacity = '1';
                    heroPhoto.style.transform = 'translateY(0)';
                }, 300);
            }
        }
    };

    // Inicializar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', Home.init);
    } else {
        Home.init();
    }

    // Expor globalmente se necessário
    window.Home = Home;

})();
