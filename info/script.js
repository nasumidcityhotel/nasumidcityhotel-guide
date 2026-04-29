document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("langToggle");
    const htmlTag = document.documentElement;

    // Detect language
    const initLanguage = () => {
        // Check localStorage first
        const savedLang = localStorage.getItem("preferredLanguage");
        if (savedLang) {
            setLanguage(savedLang);
            langToggle.checked = savedLang === "en";
            return;
        }
        
        // Fallback to browser language
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith("ja")) {
            setLanguage("ja");
            langToggle.checked = false;
        } else {
            setLanguage("en");
            langToggle.checked = true;
        }
    };

    const setLanguage = (lang) => {
        htmlTag.setAttribute("lang", lang);
        localStorage.setItem("preferredLanguage", lang);
    };

    // Toggle event listener
    langToggle.addEventListener("change", (e) => {
        if (e.target.checked) {
            setLanguage("en");
        } else {
            setLanguage("ja");
        }
    });

    // Initialize Language
    initLanguage();

    // Scroll Animations using Intersection Observer
    const animateElements = document.querySelectorAll('.animate-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => observer.observe(el));
});
