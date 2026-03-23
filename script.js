document.addEventListener('DOMContentLoaded', () => {
    
    const preloader = document.getElementById('preloader');
    const loadBar = document.getElementById('loadBar');
    const loadPercent = document.getElementById('loadPercent');
    const loadStatus = document.getElementById('loadStatus');
    const consoleLines = document.getElementById('consoleLines');

    const bootMessages = [
        "Initializing L'WESMOU Kernel...",
        "Loading Privacy Modules...",
        "Setting up Offline Environment...",
        "Checking AES-256 Encryption Keys...",
        "Mounting Local Storage...",
        "Verifying System Integrity...",
        "Starting UI Engine...",
        "System Ready."
    ];

    let width = 0;
    let messageIndex = 0;

    const loaderInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(loaderInterval);
            setTimeout(() => {
                if(preloader) {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                        document.body.classList.add('boot-complete');
                    }, 800);
                }
            }, 500);
        } else {
            width += Math.floor(Math.random() * 5) + 1;
            if (width > 100) width = 100;
            if(loadBar) loadBar.style.width = width + '%';
            if(loadPercent) loadPercent.innerText = width + '%';

            if (width % 15 === 0 && messageIndex < bootMessages.length) {
                const line = document.createElement('div');
                line.className = 'console-line';
                line.innerText = `> ${bootMessages[messageIndex]}`;
                if(consoleLines) {
                    consoleLines.appendChild(line);
                    consoleLines.scrollTop = consoleLines.scrollHeight;
                }
                if(loadStatus) loadStatus.innerText = bootMessages[messageIndex];
                messageIndex++;
            }
        }
    }, 100);

    const canvas = document.getElementById('neonCanvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = 'rgba(255, 102, 0, 0.3)';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < 80; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    }

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const clockElement = document.getElementById('digitalClock');
        if (clockElement) {
            clockElement.innerText = `${hours}:${minutes}:${seconds}`;
        }
    }

    setInterval(updateClock, 1000);
    updateClock();

    const header = document.getElementById('site-header');
    const sidebar = document.getElementById('main-sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (header) {
            window.scrollY > 50 ? header.classList.add('header-scrolled') : header.classList.remove('header-scrolled');
        }
        if (backToTop) {
            backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
        }
    });

    if(sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.add('sidebar-open');
            document.body.style.overflow = 'hidden';
        });
    }

    if(sidebarCloseBtn && sidebar) {
        sidebarCloseBtn.addEventListener('click', () => {
            sidebar.classList.remove('sidebar-open');
            document.body.style.overflow = 'auto';
        });
    }

    if(backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const privacyOverlay = document.getElementById('privacy-overlay');
    const privacyOpenBtn = document.getElementById('privacyOpenBtn');
    const privacyCloseBtn = document.getElementById('privacyCloseBtn');
    const privacyAcceptBtn = document.getElementById('privacyAcceptBtn');

    if(privacyOpenBtn) {
        privacyOpenBtn.addEventListener('click', (e) => {
            e.preventDefault();
            privacyOverlay.classList.add('modal-active');
            document.body.style.overflow = 'hidden';
        });
    }

    [privacyCloseBtn, privacyAcceptBtn].forEach(btn => {
        btn?.addEventListener('click', () => {
            privacyOverlay.classList.remove('modal-active');
            document.body.style.overflow = 'auto';
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-v5, .vision-v5-card, .tool-v5-item').forEach(el => {
        observer.observe(el);
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            sidebar?.classList.remove('sidebar-open');
            privacyOverlay?.classList.remove('modal-active');
            document.body.style.overflow = 'auto';
        }
    });
});
