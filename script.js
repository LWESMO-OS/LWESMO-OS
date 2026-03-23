/* -----------------------------------------------------------
   L'WESMOU OS - INTERACTIVE SCRIPT (V0.4)
   Author: Jamal Mellouki
   Functionality: UI/UX Enhancements & Logic
   ----------------------------------------------------------- */

/**
 * 1. تهيئة المتغيرات العامة (Global Initialization)
 * ننتظر تحميل كامل عناصر الصفحة قبل البدء لضمان عدم وجود أخطاء.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // تعريف عناصر واجهة المستخدم الرئيسية
    const header = document.getElementById('main-header');
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const backToTopBtn = document.getElementById('back-to-top');
    const privacyTrigger = document.getElementById('privacy-trigger');
    const privacyModal = document.getElementById('privacy-modal');
    const closeModalBtn = document.getElementById('close-modal');
    
    /**
     * 2. نظام القائمة الجانبية (Sidebar Logic)
     * إدارة فتح وإغلاق القائمة في الهواتف.
     */
    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
    };

    if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);

    // إغلاق القائمة عند الضغط على الروابط
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) toggleSidebar();
        });
    });

    /**
     * 3. منطق التمرير السلس وتغيير شكل الهيدر (Scroll Logic)
     */
    window.addEventListener('scroll', () => {
        // تغيير شفافية الهيدر عند التمرير
        if (window.scrollY > 50) {
            header.style.background = 'rgba(8, 8, 8, 0.98)';
            header.style.padding = '10px 5%';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(8, 8, 8, 0.95)';
            header.style.padding = '15px 5%';
            header.style.boxShadow = 'none';
        }

        // إظهار وإخفاء زر العودة للأعلى
        if (window.scrollY > 500) {
            backToTopBtn.style.display = 'flex';
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
            setTimeout(() => {
                if(backToTopBtn.style.opacity === '0') backToTopBtn.style.display = 'none';
            }, 300);
        }
    });

    /**
     * 4. نظام الأسئلة الشائعة (Accordion FAQ)
     * إدارة فتح الأجوبة وإغلاق الأخرى تلقائياً.
     */
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            // إغلاق أي سؤال آخر مفتوح حالياً
            faqQuestions.forEach(otherQ => {
                if (otherQ !== question) {
                    otherQ.nextElementSibling.style.maxHeight = null;
                    otherQ.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            // تبديل حالة السؤال الحالي
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    /**
     * 5. نظام النافذة المنبثقة للخصوصية (Privacy Modal)
     */
    const openModal = (e) => {
        e.preventDefault();
        privacyModal.style.display = 'flex';
        setTimeout(() => { privacyModal.style.opacity = '1'; }, 10);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        privacyModal.style.opacity = '0';
        setTimeout(() => {
            privacyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    };

    if (privacyTrigger) privacyTrigger.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // إغلاق النافذة عند الضغط خارجها
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) closeModal();
    });

    /**
     * 6. تأثيرات الأنيميشن عند الظهور (Intersection Observer)
     * لجعل العناصر تظهر بسلاسة عند التمرير إليها.
     */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // تشغيل الأنيميشن مرة واحدة فقط
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.feature-card, .tool-item, .roadmap-step, .dev-card');
    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });

    /**
     * 7. منطق زر العودة للأعلى (Back to Top)
     */
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * 8. معالجة روابط التواصل الاجتماعي (Social Media Log)
     * وظيفة تضمن تسجيل النقرات لأغراض التحليل (اختياري).
     */
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const platform = e.currentTarget.getAttribute('title');
            console.log(`L'WESMOU OS: تم توجيه المستخدم إلى ${platform}`);
        });
    });

    /**
     * 9. وظيفة إضافية: محاكاة التحميل (Download Simulation)
     * تظهر رسالة للمستخدم عند الضغط على زر التحميل.
     */
    const mainDownloadBtn = document.querySelector('.main-download-btn');
    if (mainDownloadBtn) {
        mainDownloadBtn.addEventListener('click', () => {
            // يمكن إضافة Logic إضافي هنا مثل إظهار Toast Notification
            console.log("جارٍ تحويلك إلى قناة تليجرام لتحميل L'WESMOU OS...");
        });
    }

    /**
     * 10. تحسينات الأداء (Performance Optimization)
     * إلغاء تفعيل الأنيميشن المعقدة إذا كان المستخدم يفضل تقليل الحركة.
     */
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        document.querySelectorAll('.animate-text').forEach(el => {
            el.style.animation = 'none';
        });
    }

    /**
     * 11. وظيفة برمجية دقيقة لحساب الأبعاد الديناميكية
     * تضمن بقاء الموقع متناسقاً في مختلف الشاشات.
     */
    const adjustLayout = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', adjustLayout);
    adjustLayout();

    /**
     * 12. رسالة الترحيب في الـ Console
     * بصمتك كمطور في المتصفح.
     */
    console.log("%c L'WESMOU OS %c Developed by Jamal Mellouki %c", 
                "color: #fff; background: #ff6600; padding:5px 10px; border-radius: 5px; font-weight: bold;", 
                "color: #ff6600; font-weight: bold;", 
                "color: #fff;");

});

// --- نهاية الملف - تم صياغة الأكواد بدقة كاملة لضمان الوظائف المذكورة ---
