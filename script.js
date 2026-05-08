document.addEventListener("DOMContentLoaded", () => {
    // AOS init
    AOS.init({ duration: 1000, once: true });

    // Typing Effect
    const words = ["Web Developer", "CSE Student", "Problem Solver"];
    let wordIndex = 0, charIndex = 0, isDeleting = false;
    function type() {
        const currentWord = words[wordIndex];
        const typingElement = document.querySelector(".typing");
        if (isDeleting) { typingElement.textContent = currentWord.substring(0, charIndex - 1); charIndex--; }
        else { typingElement.textContent = currentWord.substring(0, charIndex + 1); charIndex++; }
        if (!isDeleting && charIndex === currentWord.length) { setTimeout(() => { isDeleting = true; }, 2000); }
        else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; }
        setTimeout(type, isDeleting ? 50 : 100);
    }
    type();

    // Click Interaction for Nudge
    document.querySelectorAll('.interactive, .skill-card-pro').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.remove('nudge');
            void card.offsetWidth; // trigger reflow
            card.classList.add('nudge');
        });
    });

    // Mobile menu toggle
    const menu = document.querySelector('#mobile-menu');
    const links = document.querySelector('.nav-links');
    if(menu) {
        menu.addEventListener('click', () => {
            links.classList.toggle('active');
        });
    }
});