
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

const revealElements = document.querySelectorAll(".content, .team-member");
window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const revealPoint = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (revealPoint < windowHeight - 100) {
            el.classList.add("reveal", "active");
        }
    });
});
