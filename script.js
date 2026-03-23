// --- البيانات الكاملة (مطابقة تماماً للمشروع الأصلي) ---
const tools = [
    { name: 'مدير التحميلات', desc: 'حمل محتواك المفضل من أي مكان بجودة تصل إلى 4K مع خيارات تخصيص كاملة.' },
    { name: 'مستكشف الملفات', desc: 'أداتك الشاملة لإدارة ملفاتك: دمج، ترجمة، ضغط، وقفل ملفاتك بذكاء.' },
    { name: 'محرر الوسائط', desc: 'ارفع جودة صورك وفيديوهاتك، أزل الضوضاء، وأضف لمسات احترافية.' },
    { name: 'مدير المهام', desc: 'نظم وقتك، أضف تذكيرات، وأجل مهامك بمرونة تامة.' },
    { name: 'الخزنة', desc: 'احمِ خصوصيتك واحفظ ملفاتك الخاصة في مكان مشفر بعيداً عن الأعين.' },
];

const faqs = [
    { q: 'ما هو L\'WESMOU OS؟', a: 'هو نظام إنتاجية متكامل مصمم لأجهزة أندرويد، يركز على الخصوصية والكفاءة.' },
    { q: 'هل التطبيق مجاني؟', a: 'نعم، التطبيق متاح مجاناً، مع وجود إعلانات لدعم تطويره.' },
    { q: 'هل يحتوي التطبيق على إعلانات؟', a: 'نعم، يحتوي التطبيق على إعلانات لدعم استمرارية التطوير وتوفير الميزات.' },
    { q: 'هل تؤثر الإعلانات على تجربة الاستخدام؟', a: 'لا، تم تصميم الإعلانات بعناية لتكون غير مزعجة ولا تؤثر على تجربة الاستخدام.' },
    { q: 'هل يحتاج التطبيق إلى إنترنت؟', a: 'نعم، بعض الأدوات تحتاج للإنترنت، بينما تعمل الأدوات الأساسية الأخرى دون الحاجة إليه.' },
    { q: 'هل تعمل جميع الأدوات بدون إنترنت؟', a: 'لا، بعض الأدوات المتقدمة تتطلب اتصالاً بالإنترنت، لكن الأدوات الأساسية تعمل محلياً.' },
    { q: 'هل بياناتي آمنة؟', a: 'نعم، خصوصيتك هي أولويتنا، حيث يتم تنفيذ معظم العمليات محلياً على جهازك.' },
    { q: 'كيف أقوم بتحميل الملفات؟', a: 'يمكنك تحميل الملفات بسهولة عبر أداة مدير التحميلات باستخدام الروابط أو البحث الذكي.' },
    { q: 'هل يدعم التطبيق ملفات PDF؟', a: 'نعم، يمكنك تعديل، دمج، وترجمة ملفات PDF بكل سهولة.' },
    { q: 'هل يمكنني زيادة جودة الفيديوهات؟', a: 'نعم، يوفر محرر الوسائط أدوات احترافية لرفع جودة الصور والفيديوهات.' },
    { q: 'كيف أضيف تذكيراً لمهامي؟', a: 'عبر أداة مدير المهام، يمكنك إضافة تذكيرات ذكية وتأجيل المهام.' },
    { q: 'أين تُحفظ الملفات الخاصة؟', a: 'تُحفظ في "الخزنة" المشفرة داخل أعماق النظام، بعيداً عن أي وصول خارجي.' },
    { q: 'هل التطبيق يدعم اللغة العربية؟', a: 'نعم، التطبيق يدعم اللغة العربية بالكامل لسهولة الاستخدام.' },
    { q: 'هل يمكنني إزالة العلامة المائية؟', a: 'نعم، يوفر محرر الوسائط أدوات لإزالة العلامات المائية والضوضاء من الصور والفيديوهات.' },
    { q: 'هل التطبيق يستهلك البطارية؟', a: 'التطبيق مصمم ليكون خفيفاً جداً ولا يستهلك البطارية بشكل غير مبرر.' },
    { q: 'هل يمكنني تأجيل المهام؟', a: 'نعم، يمكنك تأجيل المهام غير المحققة بمرونة عالية لتنظيم وقتك بشكل أفضل.' },
    { q: 'هل يمكنني فك قفل ملفات Word؟', a: 'نعم، يتيح لك مستكشف الملفات قفل وفك قفل ملفات Word و Excel.' },
    { q: 'هل يدعم التطبيق فلاتر الصوت؟', a: 'نعم، يمكنك إضافة فلاتر احترافية للصوت عبر محرر الوسائط.' },
    { q: 'هل يتم تخزين الصور في السحابة؟', a: 'لا، يتم تخزين الصور والملفات محلياً على جهازك لضمان خصوصيتك.' },
    { q: 'كيف أتواصل مع المطور؟', a: 'يمكنك التواصل معنا عبر روابط التواصل الاجتماعي المتاحة في قسم المطور.' }
];

const privacyPolicy = [
    "جمع البيانات: نلتزم بجمع الحد الأدنى من البيانات الضرورية فقط لضمان عمل التطبيق.",
    "معالجة البيانات: تتم معالجة معظم البيانات محلياً على جهاز المستخدم لضمان الخصوصية.",
    "مشاركة البيانات: لا نقوم ببيع أو مشاركة بياناتك الشخصية مع أطراف ثالثة.",
    "أمن البيانات: نستخدم تقنيات تشفير متقدمة لحماية ملفاتك في 'الخزنة'.",
    "حقوق المستخدم: يحق لك الوصول إلى بياناتك أو طلب حذفها في أي وقت.",
    "الإعلانات: نستخدم إعلانات غير مزعجة لدعم التطوير، ولا نجمع بيانات تتبع حساسة.",
    "روابط الطرف الثالث: لا نتحمل مسؤولية محتوى المواقع الخارجية التي قد تظهر في الإعلانات.",
    "خصوصية الأطفال: التطبيق غير مخصص للأطفال دون سن 13 عاماً.",
    "تحديثات السياسة: قد نقوم بتحديث هذه السياسة، وسيتم إخطارك بأي تغييرات جوهرية.",
    "اتصل بنا: يمكنك التواصل معنا عبر البريد الإلكتروني لأي استفسار."
];

const termsOfUse = [
    "قبول الشروط: باستخدامك للتطبيق، أنت توافق على هذه الشروط بالكامل.",
    "الترخيص: نمنحك ترخيصاً محدوداً وغير حصري لاستخدام التطبيق.",
    "سلوك المستخدم: يمنع استخدام التطبيق لأي أغراض غير قانونية أو ضارة.",
    "الملكية الفكرية: جميع الحقوق الفكرية للتطبيق محفوظة للمطور.",
    "إخلاء المسؤولية: التطبيق مقدم 'كما هو' دون أي ضمانات صريحة أو ضمنية.",
    "تحديد المسؤولية: لا نتحمل مسؤولية أي أضرار ناتجة عن استخدام التطبيق.",
    "إنهاء الخدمة: نحتفظ بالحق في إنهاء وصولك للتطبيق في حال مخالفة الشروط.",
    "القانون الحاكم: تخضع هذه الشروط للقوانين المعمول بها في بلد المطور.",
    "تعديل الشروط: يحق لنا تعديل هذه الشروط، واستمرارك في استخدام التطبيق يعني موافقتك.",
    "معلومات الاتصال: لأي استفسارات قانونية، يرجى التواصل معنا عبر البريد الإلكتروني."
];

// --- الوظائف التفاعلية ---

// 1. ملء الأدوات
const toolsGrid = document.getElementById('toolsGrid');
if (toolsGrid) {
    tools.forEach(tool => {
        toolsGrid.innerHTML += `
            <div class="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all shadow-xl flex flex-col gap-6 cursor-pointer">
                <span class="font-bold text-xl">${tool.name}</span>
                <p class="text-zinc-400 leading-relaxed">${tool.desc}</p>
            </div>
        `;
    });
}

// 2. ملء الأسئلة الشائعة
const faqContainer = document.getElementById('faqContainer');
if (faqContainer) {
    faqs.forEach((faq, index) => {
        const div = document.createElement('div');
        div.className = "bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden";
        div.innerHTML = `
            <button class="faq-toggle w-full p-6 text-right font-semibold text-lg hover:bg-white/5 transition-colors flex justify-between items-center">
                ${index + 1}. ${faq.q}
                <span>▼</span>
            </button>
            <div class="faq-answer px-6 pb-6 text-zinc-400 leading-relaxed hidden">${faq.a}</div>
        `;
        // إضافة وظيفة التبديل (Accordion)
        div.querySelector('.faq-toggle').addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('hidden');
        });
        faqContainer.appendChild(div);
    });
}

// 3. المودال (الخصوصية والشروط)
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

function openModal(title, contentArray) {
    modalTitle.innerText = title;
    modalContent.innerHTML = contentArray.map((item, i) => `<p><span class="font-bold text-orange-500">${i+1}. </span>${item}</p>`).join('');
    modal.classList.remove('hidden');
}

document.getElementById('openPrivacy').addEventListener('click', () => openModal('سياسة الخصوصية', privacyPolicy));
document.getElementById('openTerms').addEventListener('click', () => openModal('شروط الاستخدام', termsOfUse));
document.getElementById('closeModal').addEventListener('click', () => modal.classList.add('hidden'));

// 4. القائمة الجانبية (Sidebar)
document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('hidden');
});

// 5. زر العودة للأعلى (Scroll to Top)
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTop');
    if (window.scrollY > 300) {
        btn.classList.remove('hidden');
    } else {
        btn.classList.add('hidden');
    }
});

document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
