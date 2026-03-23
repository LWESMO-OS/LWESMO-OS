document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const SYSTEM_CONFIG = {
        version: "0.5.2026",
        developer: "Jamal Mellouki",
        theme: "Ultra-Matte Black",
        accent: "#ff6600",
        selectors: {
            overlay: '#modalOverlayv5',
            openBtn: '#triggerPrivacyModal',
            closeBtn: '#closeModalv5',
            confirmBtn: '#confirmModalv5',
            accordions: '.accordion-item-v5',
            cards: '.access-item-card',
            body: 'body',
            status: '.status-dot'
        }
    };

    const UI_ELEMENTS = {
        overlay: document.querySelector(SYSTEM_CONFIG.selectors.overlay),
        openBtn: document.querySelector(SYSTEM_CONFIG.selectors.openBtn),
        closeBtn: document.querySelector(SYSTEM_CONFIG.selectors.closeBtn),
        confirmBtn: document.querySelector(SYSTEM_CONFIG.selectors.confirmBtn),
        accordions: document.querySelectorAll(SYSTEM_CONFIG.selectors.accordions),
        cards: document.querySelectorAll(SYSTEM_CONFIG.selectors.cards),
        body: document.querySelector(SYSTEM_CONFIG.selectors.body),
        status: document.querySelector(SYSTEM_CONFIG.selectors.status)
    };

    const MODAL_ENGINE = {
        init: function() {
            if (UI_ELEMENTS.openBtn) {
                UI_ELEMENTS.openBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.launch();
                });
            }
            if (UI_ELEMENTS.closeBtn) {
                UI_ELEMENTS.closeBtn.addEventListener('click', () => this.terminate());
            }
            if (UI_ELEMENTS.confirmBtn) {
                UI_ELEMENTS.confirmBtn.addEventListener('click', () => this.terminate());
            }
            window.addEventListener('click', (e) => {
                if (e.target === UI_ELEMENTS.overlay) {
                    this.terminate();
                }
            });
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.terminate();
                }
            });
        },
        launch: function() {
            UI_ELEMENTS.overlay.classList.add('active');
            UI_ELEMENTS.body.style.overflow = 'hidden';
            UI_ELEMENTS.body.style.paddingRight = '5px';
        },
        terminate: function() {
            UI_ELEMENTS.overlay.classList.remove('active');
            UI_ELEMENTS.body.style.overflow = '';
            UI_ELEMENTS.body.style.paddingRight = '';
        }
    };

    const ACCORDION_ENGINE = {
        init: function() {
            UI_ELEMENTS.accordions.forEach(module => {
                module.addEventListener('toggle', (e) => {
                    if (module.open) {
                        this.closeOthers(module);
                    }
                });
            });
        },
        closeOthers: function(currentModule) {
            UI_ELEMENTS.accordions.forEach(otherModule => {
                if (otherModule !== currentModule && otherModule.open) {
                    otherModule.removeAttribute('open');
                }
            });
        }
    };

    const INTERACTION_ENGINE = {
        init: function() {
            this.applyHoverEffects();
            this.initSmoothScroll();
            this.initSystemPulse();
        },
        applyHoverEffects: function() {
            UI_ELEMENTS.cards.forEach(target => {
                target.addEventListener('mouseenter', () => {
                    const icon = target.querySelector('.access-item-icon i');
                    if (icon) {
                        icon.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        icon.style.transform = 'scale(1.2) rotate(-8deg)';
                    }
                });
                target.addEventListener('mouseleave', () => {
                    const icon = target.querySelector('.access-item-icon i');
                    if (icon) {
                        icon.style.transform = 'scale(1) rotate(0deg)';
                    }
                });
            });
        },
        initSmoothScroll: function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const destination = document.querySelector(this.getAttribute('href'));
                    if (destination) {
                        destination.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        },
        initSystemPulse: function() {
            if (UI_ELEMENTS.status) {
                setInterval(() => {
                    UI_ELEMENTS.status.style.boxShadow = '0 0 15px #00ff88';
                    setTimeout(() => {
                        UI_ELEMENTS.status.style.boxShadow = 'none';
                    }, 500);
                }, 3000);
            }
        }
    };

    const PERFORMANCE_ENGINE = {
        init: function() {
            this.handleViewportLock();
            window.addEventListener('resize', this.debounce(() => {
                this.handleViewportLock();
            }, 250));
        },
        handleViewportLock: function() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        },
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    };

    const SYSTEM_BOOT = {
        run: function() {
            MODAL_ENGINE.init();
            ACCORDION_ENGINE.init();
            INTERACTION_ENGINE.init();
            PERFORMANCE_ENGINE.init();
            this.logIdentity();
        },
        logIdentity: function() {
            const style = `color: ${SYSTEM_CONFIG.accent}; font-weight: bold; font-size: 1.2rem;`;
            console.log("%c[L'WESMO OS INITIALIZED]", style);
            console.log(`BUILD: ${SYSTEM_CONFIG.version}`);
            console.log(`DEVELOPER: ${SYSTEM_CONFIG.developer}`);
        }
    };

    SYSTEM_BOOT.run();
});
