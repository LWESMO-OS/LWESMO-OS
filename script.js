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
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    document.body.classList.add('boot-complete');
                }, 800);
            }, 500);
        } else {
            width += Math.floor(Math.random() * 5) + 1;
            if (width > 100) width = 100;
            loadBar.style.width = width + '%';
            loadPercent.innerText = width + '%';

            if (width % 15 === 0 && messageIndex < bootMessages.length) {
                const line = document.createElement('div');
                line.className = 'console-line';
                line.innerText = `> ${bootMessages[messageIndex]}`;
                consoleLines.appendChild(line);
                consoleLines.scrollTop = consoleLines.scrollHeight;
                loadStatus.innerText = bootMessages[messageIndex];
                messageIndex++;
            }
        }
    }, 100);

    const canvas = document.getElementById('neonCanvas');
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

});
    const header = document.getElementById('site-header');
    const sidebar = document.getElementById('main-sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    const backToTop = document.getElementById('backToTop');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        if (window.scrollY > 500) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('sidebar-open');
        document.body.style.overflow = 'hidden';
    });

    const closeSidebar = () => {
        sidebar.classList.remove('sidebar-open');
        document.body.style.overflow = 'auto';
    };

    sidebarCloseBtn.addEventListener('click', closeSidebar);
    
    document.querySelector('.sidebar-v5-overlay')?.addEventListener('click', closeSidebar);

    document.querySelectorAll('.side-nav-link').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const faqItems = document.querySelectorAll('.faq-v5-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-v5-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(i => i.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-v5, .vision-v5-card, .tool-v5-item').forEach(el => {
        observer.observe(el);
    });
    const privacyOverlay = document.getElementById('privacy-overlay');
    const privacyOpenBtn = document.getElementById('privacyOpenBtn');
    const privacyCloseBtn = document.getElementById('privacyCloseBtn');
    const privacyAcceptBtn = document.getElementById('privacyAcceptBtn');

    const openModal = (modal) => {
        if (!modal) return;
        modal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (modal) => {
        if (!modal) return;
        modal.classList.remove('modal-active');
        document.body.style.overflow = 'auto';
    };

    privacyOpenBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(privacyOverlay);
    });

    privacyCloseBtn?.addEventListener('click', () => closeModal(privacyOverlay));
    privacyAcceptBtn?.addEventListener('click', () => closeModal(privacyOverlay));

    window.addEventListener('click', (e) => {
        if (e.target === privacyOverlay) {
            closeModal(privacyOverlay);
        }
    });

    const typeWriter = (selector, text, speed = 50) => {
        const element = document.querySelector(selector);
        if (!element) return;
        
        let i = 0;
        element.innerHTML = '';
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    };

    const heroSubtitle = document.querySelector('.v5-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.innerText;
        typeWriter('.v5-subtitle', originalText, 100);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("%c L'WESMOU OS v0.5 ", "background: #ff6600; color: #fff; font-size: 20px; font-weight: bold;");
    console.log("%c Developed by Jamal Mellouki ", "color: #ff6600; font-weight: bold;");

    const handleNetworkChange = () => {
        const statusIndicator = document.querySelector('.status-indicator');
        const statusText = document.querySelector('.footer-v5-status');
        
        if (navigator.onLine) {
            if (statusIndicator) statusIndicator.style.background = '#4CAF50';
            if (statusText) statusText.innerHTML = '<span class="status-indicator" style="background:#4CAF50"></span> النظام متصل ومستقر';
        } else {
            if (statusIndicator) statusIndicator.style.background = '#ffc107';
            if (statusText) statusText.innerHTML = '<span class="status-indicator" style="background:#ffc107"></span> يعمل في وضع الأوفلاين الآمن';
        }
    };

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);
    handleNetworkChange();

    document.querySelectorAll('.tool-v5-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const visual = item.querySelector('.tool-v5-visual');
            if (visual) visual.style.transform = 'scale(1.02) translateY(-5px)';
        });
        item.addEventListener('mouseleave', () => {
            const visual = item.querySelector('.tool-v5-visual');
            if (visual) visual.style.transform = 'scale(1) translateY(0)';
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(privacyOverlay);
            closeSidebar();
        }
    });


