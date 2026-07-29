// Yukarı Çık Butonu

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

};

topBtn.onclick = function () {

window.scrollTo({

top: 0,

behavior: "smooth"

});

};

// Sayfa Açılış Animasyonu

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

});

sections.forEach((section) => {

section.style.opacity = "0";

section.style.transform = "translateY(50px)";

section.style.transition = "all 0.8s ease";

observer.observe(section);

});
// Galeri Resimlerini Büyütme

const images = document.querySelectorAll(".gallery-grid img");

images.forEach((img)=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="9999";

const big=document.createElement("img");

big.src=img.src;
big.style.maxWidth="90%";
big.style.maxHeight="90%";
big.style.borderRadius="20px";
big.style.boxShadow="0 0 40px black";

overlay.appendChild(big);

overlay.onclick=()=>{

overlay.remove();

}

document.body.appendChild(overlay);

});

});


// Buton Animasyonu

const buttons=document.querySelectorAll(".btn");

buttons.forEach((btn)=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// Hero Resmine Hareket Efekti

const hero=document.querySelector(".hero-image img");

if(hero){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;
const y=(window.innerHeight/2-e.clientY)/40;

hero.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

}
// Sayfa Yüklenme Efekti

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .8s";


// Navbar Arkaplanı

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.95)";

}else{

header.style.background="rgba(0,0,0,.75)";

}

});


// Resimlere Fade Efekti

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img)=>{

img.style.opacity="0";

});

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

galleryImages.forEach((img)=>{

img.style.transform="translateY(40px)";
img.style.transition=".7s";

imageObserver.observe(img);

});


// Konsola Bilgi

console.log("Ankara Midye | Site başarıyla yüklendi.");
