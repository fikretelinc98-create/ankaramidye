// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 2500);
});

// Navbar Arka Planı
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,.92)";
        header.style.backdropFilter = "blur(18px)";
    } else {
        header.style.background = "rgba(0,0,0,.55)";
    }

});

// Fade Animasyonu
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.15});

document.querySelectorAll(".feature-box,.gallery img,.about,.contact").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s";

observer.observe(item);

});

// Galeri Hover Efekti
document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mousemove",()=>{

img.style.transform="scale(1.08) rotate(1deg)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// Hero Yazısı
const heroTitle=document.querySelector(".hero h1");

let scale=1;

setInterval(()=>{

scale=scale===1?1.02:1;

heroTitle.style.transform=`scale(${scale})`;

},1200);

// Sağ Tık Engeli
document.addEventListener("contextmenu",e=>e.preventDefault());

// F12 Engeli
document.addEventListener("keydown",function(e){

if(e.key==="F12"){

e.preventDefault();

}

});
// Sayfa Yukarı Çık Butonu
const topButton = document.createElement("div");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.className = "top-button";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.left = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "60px";
topButton.style.height = "60px";
topButton.style.borderRadius = "50%";
topButton.style.background = "#d4af37";
topButton.style.color = "#000";
topButton.style.display = "flex";
topButton.style.alignItems = "center";
topButton.style.justifyContent = "center";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "24px";
topButton.style.boxShadow = "0 0 25px rgba(212,175,55,.5)";
topButton.style.opacity = "0";
topButton.style.transition = ".4s";
topButton.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";

    } else {

        topButton.style.opacity = "0";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Buton Parlama Efekti

setInterval(() => {

document.querySelectorAll(".btn,.contact-btn,.floating-phone,.floating-whatsapp").forEach(el=>{

el.animate([

{transform:"scale(1)"},

{transform:"scale(1.06)"},

{transform:"scale(1)"}

],{

duration:1200

});

});

},2500);

// Video Hızını Ayarla

const video=document.querySelector("video");

if(video){

video.playbackRate=0.8;

}

// Konsol Mesajı

console.log("Ankara Midye Premium Website");
console.log("© 2026 Ankara Midye");
document.querySelectorAll(".counter").forEach(counter=>{

const hedef=+counter.dataset.target;

let sayi=0;

const arttir=()=>{

const artis=Math.ceil(hedef/80);

sayi+=artis;

if(sayi<hedef){

counter.innerText=sayi;

requestAnimationFrame(arttir);

}else{

counter.innerText=hedef;

}

};

arttir();

});
