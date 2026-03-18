// Modal functionality
let currentModal = null;

// Open modal with specific course type
function openModal(courseType) {
    // Create modal data
    const modalData = {
        Title: courseType === 'ingles' ? 'Curso de Inglês' : 'Certificações',
        CourseType: courseType
    };

    // Load modal content via AJAX or render directly
    loadModalContent(modalData);
}

// Load modal content
function loadModalContent(data) {
    // Remove existing modal if any
    const existingModal = document.getElementById('courseModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal HTML (simplified version for demo)
    const modalHTML = `
        <div class="modal-overlay" id="courseModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${data.Title}</h3>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    ${generateModalContent(data.CourseType)}
                </div>
                <div class="modal-footer">
                    <button class="btn modal-btn" onclick="closeModal()">Fechar</button>
                </div>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal with animation
    setTimeout(() => {
        const modal = document.getElementById('courseModal');
        modal.classList.add('active');
        currentModal = modal;
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }, 10);
}

// Generate modal content based on course type
function generateModalContent(courseType) {
    if (courseType === 'ingles') {
        return `
            <div class="course-info">
               <div class="course-section">
                        <h4>Centro de línguas</h4>
                        <p><strong>Instituição:</strong> EE. Dr. Julio Prestes de Albuquerque</p>
                        <p><strong>Duração:</strong> 1 ano</p>
                        <p><strong>Nível:</strong> intermediário</p>
                        <p><strong>Descrição:</strong> Curso de inglês com foco em comunicação básica e intermediária.</p>
                        
                        <div class="course-skills">
                            <h5>Competências Desenvolvidas:</h5>
                            <ul>
                                <li>Comunicação em inglês</li>
                                <li>Anáçises de textos em inglês</li>
                                <li>Participação em discussões</li>
                                <li>Tarefas e atividades</li>
                            </ul>
                        </div>
                </div>
            </div>
        `;
    } else if (courseType === 'certificacoes') {
        return `
            <div class="course-info">
                <div class="course-section">
                    <h4>🏆 Certificações Profissionais</h4>
                    <p><strong>Plataforma:</strong> IBM</p>
                    <p><strong>Área:</strong> Desenvolvimento Web, Inteligência Artificial, Programação entre outros</p>
                    <p><strong>Descrição:</strong> Certificações que validam conhecimentos técnicos em tecnologias modernas.</p>
                    
                    <div class="course-skills">
                        <h5>Certificações Principais:</h5>
                        <ul>
                            <li>Microsoft Certified: Azure Developer Associate</li>
                            <li>AWS Certified Cloud Practitioner</li>
                            <li>JavaScript Algorithms and Data Structures</li>
                            <li>React - The Complete Guide</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    return '';
}

// Close modal
function closeModal() {
    if (currentModal) {
        currentModal.classList.remove('active');
        
        // Remove modal after animation
        setTimeout(() => {
            if (currentModal) {
                currentModal.remove();
                currentModal = null;
            }
        }, 300);
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (currentModal && event.target === currentModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && currentModal) {
        closeModal();
    }
});

// Initialize modal links when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find all course links and add click handlers
    const courseLinks = document.querySelectorAll('.course-modal-link');
    courseLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const courseType = this.getAttribute('data-course');
            openModal(courseType);
        });
    });
});
