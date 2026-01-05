// Site.js - JavaScript global para todo o site
// Equivalente ao comportamento controlado por Controllers no ASP.NET

(function() {
    'use strict';

    // Funções globais de inicialização
    const Site = {
        init: function() {
            console.log('Site initialized');
            this.setupGlobalEvents();
        },

        setupGlobalEvents: function() {
            // Eventos globais que se aplicam a todas as páginas
            this.setupSmoothScrolling();
            this.setupNavigation();
        },

        setupSmoothScrolling: function() {
            // Smooth scrolling para links de navegação
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        },

        setupNavigation: function() {
            // Lógica de navegação global
            const header = document.querySelector('.header');
            if (header) {
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 100) {
                        header.style.background = 'rgba(15, 15, 19, 0.95)';
                    } else {
                        header.style.background = 'rgba(15, 15, 19, 0.7)';
                    }
                });
            }
        }
    };

    // Inicializar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', Site.init);
    } else {
        Site.init();
    }

    // Expor globalmente se necessário
    window.Site = Site;

})();
