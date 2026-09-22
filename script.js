// =========================
// MOBILE NAVIGATION
// =========================

const navLinks = document.querySelector(".nav-links");
const navButton = document.querySelector(".nav-button");

if (navButton && navLinks) {
    navButton.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-menu");
    });
}


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .project-card, .service-card, .skill-item, .education-card, .certification-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});                                     