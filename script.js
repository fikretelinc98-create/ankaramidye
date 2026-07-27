// ==========================
// Ankara Midye
// script.js
// ==========================

// Header Scroll Efekti
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(0,0,0,.92)";
        header.style.boxShadow = "none";
    }
});

// Menü Linklerine Yumuşak Geçiş
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// Sayfa Açılış Animasyonu
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Kartlar Scroll Olunca Görünsün
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";

    observer.observe(card);

});
