/* =====================================
   Ankara Midye - script.js
===================================== */

/* ========= AYARLAR ========= */
/* Sadece bu numarayı değiştirmen yeterli */

const CONFIG = {
    phone: "905462805374"
};

/* ========= LİNKLER ========= */

document.addEventListener("DOMContentLoaded", () => {

    const tel = "tel:+" + CONFIG.phone;
    const wa = "https://wa.me/" + CONFIG.phone;
    const sms = "sms:+" + CONFIG.phone;

    function setLink(id, href) {
        const el = document.getElementById(id);
        if (el) el.href = href;
    }

    setLink("phoneLink", tel);
    setLink("whatsappLink", wa);
    setLink("smsLink", sms);

    setLink("floatingPhone", tel);
    setLink("floatingWhatsapp", wa);
    setLink("floatingSms", sms);

    /* ========= LIGHTBOX ========= */

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    document.querySelectorAll(".gallery-grid img").forEach(img => {

        img.addEventListener("click", () => {

            if (!lightbox || !lightboxImage) return;

            lightbox.style.display = "flex";
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;

        });

    });

    if (closeLightbox) {

        closeLightbox.onclick = () => {

            lightbox.style.display = "none";

        };

    }

    if (lightbox) {

        lightbox.onclick = function(e) {

            if (e.target === lightbox) {

                lightbox.style.display = "none";

            }

        }

    }

    /* ========= SCROLL ANİMASYONU ========= */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".card,.gallery-grid img,.contact-item").forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

});

/* ========= HEADER GÖLGESİ ========= */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* ========= FOOTER YILI ========= */

const copy = document.querySelector(".copyright");

if (copy) {

    copy.innerHTML =
        "© " + new Date().getFullYear() + " Ankara Midye - Tüm Hakları Saklıdır.";

}
