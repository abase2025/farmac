// Variáveis globais
let chatOpen = false;

// Função para mostrar seções
function showSection(sectionId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar seção selecionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Atualizar navegação
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Encontrar e ativar o item de navegação correspondente
    const navTexts = {
        'home': 'Início',
        'especialidades': 'Especialidades',
        'metodos': 'Métodos',
        'casos': 'Casos Clínicos',
        'videos': 'Vídeos',
        'equipe': 'Equipe'
    };
    
    navItems.forEach(item => {
        if (item.textContent === navTexts[sectionId]) {
            item.classList.add('active');
        }
    });
}

// Função para criar partículas animadas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posição inicial aleatória
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Função para alternar chat
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        chatWindow.style.display = 'flex';
        chatWindow.style.animation = 'slideIn 0.3s ease-out';
    } else {
        chatWindow.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            chatWindow.style.display = 'none';
        }, 300);
    }
}

// Função para lidar com entrada do chat
function handleChatInput(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (message) {
            addChatMessage(message, 'user');
            input.value = '';
            
            // Simular resposta do bot
            setTimeout(() => {
                const response = getBotResponse(message);
                addChatMessage(response, 'bot');
            }, 1000);
        }
    }
}

// Função para adicionar mensagem ao chat
function addChatMessage(message, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    if (sender === 'user') {
        messageDiv.innerHTML = `<strong>Você:</strong> ${message}`;
    } else {
        messageDiv.innerHTML = `<strong>DON-FBBR:</strong> ${message}`;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Função para gerar resposta do bot
function getBotResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('lidocaína') || msg.includes('anestésico')) {
        return 'A lidocaína é um anestésico local tipo amida, com início rápido (2-3 min) e duração de 60-90 minutos. É o padrão-ouro para procedimentos odontológicos. 💉';
    }
    
    if (msg.includes('alergia') || msg.includes('reação')) {
        return 'Reações alérgicas verdadeiras a anestésicos são raras (<1%). A maioria são reações vasovagais ou toxicidade sistêmica. Sempre faça anamnese detalhada! ⚠️';
    }
    
    if (msg.includes('cardiopata') || msg.includes('coração')) {
        return 'Para cardiopatas, use lidocaína ou mepivacaína com epinefrina 1:100.000 ou sem vasoconstritor. Evite felipressina em pacientes com doença coronariana. ❤️';
    }
    
    if (msg.includes('gestante') || msg.includes('grávida')) {
        return 'Lidocaína é segura na gestação (categoria B). Evite prilocaína. Prefira procedimentos no 2º trimestre quando possível. 🤰';
    }
    
    if (msg.includes('anticoagulante') || msg.includes('varfarina')) {
        return 'Nunca suspenda anticoagulantes! Para procedimentos simples, mantenha a medicação e use hemostasia local. Evite AINEs! 🩸';
    }
    
    if (msg.includes('pdf') || msg.includes('material')) {
        return 'Temos 5 PDFs especializados na seção "Métodos de Administração". Material completo sobre farmacocinética, receptores, SNC e analgésicos! 📚';
    }
    
    if (msg.includes('obrigado') || msg.includes('valeu')) {
        return 'Por nada! Estou sempre aqui para ajudar com farmacologia odontológica. Que tal explorar nossos casos clínicos? 😊';
    }
    
    if (msg.includes('dose') || msg.includes('dosagem')) {
        return 'Doses máximas seguras: Lidocaína 4,4mg/kg (com epi) ou 7mg/kg (sem epi). Mepivacaína 4,4mg/kg. Sempre calcule baseado no peso do paciente! ⚖️';
    }
    
    if (msg.includes('criança') || msg.includes('pediatria')) {
        return 'Em pediatria, prefira lidocaína 2% com epinefrina. Calcule dose por peso (máx 4,4mg/kg). Use técnicas de distração e considere sedação consciente se necessário. 👶';
    }
    
    if (msg.includes('hipertensão') || msg.includes('pressão')) {
        return 'Hipertensos controlados podem receber anestésicos com epinefrina. Para não controlados (>180/110), evite epinefrina ou use doses mínimas. 🩺';
    }
    
    // Resposta padrão
    return 'Interessante pergunta! Sou especializado em farmacologia odontológica. Posso ajudar com anestésicos, interações medicamentosas, casos clínicos e muito mais. Seja mais específico! 🤖';
}

// Função para adicionar animação CSS de slideOut
function addSlideOutAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
    `;
    document.head.appendChild(style);
}

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    addSlideOutAnimation();
    
    // Adicionar animações de entrada
    setTimeout(() => {
        document.querySelectorAll('.card, .image-card, .pdf-card, .clinical-case, .team-member').forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('fade-in');
            }, index * 100);
        });
    }, 500);
    
    // Adicionar event listeners para navegação
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent;
            const sectionMap = {
                'Início': 'home',
                'Especialidades': 'especialidades',
                'Métodos': 'metodos',
                'Casos Clínicos': 'casos',
                'Vídeos': 'videos',
                'Equipe': 'equipe'
            };
            
            const sectionId = sectionMap[text];
            if (sectionId) {
                showSection(sectionId);
            }
        });
    });
    
    // Fechar chat ao clicar fora
    document.addEventListener('click', function(e) {
        const chatContainer = document.querySelector('.chat-container');
        const chatWindow = document.getElementById('chatWindow');
        
        if (chatOpen && !chatContainer.contains(e.target)) {
            toggleChat();
        }
    });
});

// Efeitos de hover nos cards
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.card, .pdf-card, .team-member, .image-card, .clinical-case')) {
        const element = e.target.closest('.card, .pdf-card, .team-member, .image-card, .clinical-case');
        element.style.transform = 'translateY(-5px) scale(1.02)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.card, .pdf-card, .team-member, .image-card, .clinical-case')) {
        const element = e.target.closest('.card, .pdf-card, .team-member, .image-card, .clinical-case');
        element.style.transform = 'translateY(0) scale(1)';
    }
});

// Função para scroll suave (se necessário)
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Adicionar funcionalidade de busca no chat
function searchContent(query) {
    const sections = document.querySelectorAll('.section');
    let results = [];
    
    sections.forEach(section => {
        const content = section.textContent.toLowerCase();
        if (content.includes(query.toLowerCase())) {
            results.push(section.id);
        }
    });
    
    return results;
}

// Função para destacar texto (se necessário)
function highlightText(element, text) {
    const innerHTML = element.innerHTML;
    const index = innerHTML.toLowerCase().indexOf(text.toLowerCase());
    
    if (index >= 0) {
        const highlighted = innerHTML.substring(0, index) + 
            '<mark>' + innerHTML.substring(index, index + text.length) + '</mark>' + 
            innerHTML.substring(index + text.length);
        element.innerHTML = highlighted;
    }
}

// Função para remover destaques
function removeHighlights() {
    const marks = document.querySelectorAll('mark');
    marks.forEach(mark => {
        mark.outerHTML = mark.innerHTML;
    });
}

// Adicionar suporte para teclas de atalho
document.addEventListener('keydown', function(e) {
    // Ctrl + / para abrir chat
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        if (!chatOpen) {
            toggleChat();
        }
        document.getElementById('chatInput').focus();
    }
    
    // ESC para fechar chat
    if (e.key === 'Escape' && chatOpen) {
        toggleChat();
    }
});

// Função para validar links de download
function validateDownloadLinks() {
    const downloadLinks = document.querySelectorAll('.download-btn');
    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                e.preventDefault();
                addChatMessage('Desculpe, este arquivo ainda não está disponível para download. Entre em contato conosco para mais informações.', 'bot');
                if (!chatOpen) {
                    toggleChat();
                }
            }
        });
    });
}

// Inicializar validação de links após carregamento
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(validateDownloadLinks, 1000);
});

// Função para detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar interface para mobile
function adjustForMobile() {
    if (isMobile()) {
        const chatWindow = document.getElementById('chatWindow');
        if (chatWindow) {
            chatWindow.style.width = '90vw';
            chatWindow.style.right = '5vw';
        }
    }
}

// Ajustar ao redimensionar
window.addEventListener('resize', adjustForMobile);

// Função para lazy loading de imagens
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

