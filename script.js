/* ===========================
   MIDYE KOLIK SCRIPT
=========================== */

// Sayfa yüklenince loader gizle

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},800);

});


// Yukarı Çık Butonu

const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backBtn.style.display="flex";

}else{

backBtn.style.display="none";

}

});

backBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Lightbox

const gallery=document.querySelectorAll(".gallery-img");

const lightbox=document.getElementById("lightbox");

const lightImg=document.getElementById("lightbox-img");

const close=document.getElementById("close-lightbox");

gallery.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightImg.src=img.src;

};

});

close.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};


// Scroll Animasyonu

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition=".8s";

observer.observe(section);

});
/* ===========================
   OTOMATİK KAYAN YORUMLAR
=========================== */

const reviewSlider = document.querySelector(".reviews-slider");

if (reviewSlider) {

let scrollAmount = 0;

setInterval(() => {

scrollAmount += 345;

if (scrollAmount >= reviewSlider.scrollWidth - reviewSlider.clientWidth) {

scrollAmount = 0;

}

reviewSlider.scrollTo({

left: scrollAmount,

behavior: "smooth"

});

}, 3000);

}

/* ===========================
   LİMON ANİMASYONU
=========================== */

function createLemon() {

const lemon = document.createElement("div");

lemon.innerHTML = "🍋";

lemon.style.position = "fixed";
lemon.style.left = Math.random() * window.innerWidth + "px";
lemon.style.top = "-60px";
lemon.style.fontSize = (20 + Math.random() * 30) + "px";
lemon.style.opacity = "0.9";
lemon.style.pointerEvents = "none";
lemon.style.zIndex = "2";
lemon.style.transition = "transform linear";

document.body.appendChild(lemon);

let pos = -60;
let drift = (Math.random() - 0.5) * 2;

const fall = setInterval(() => {

pos += 3;

lemon.style.top = pos + "px";
lemon.style.left = parseFloat(lemon.style.left) + drift + "px";
lemon.style.transform = `rotate(${pos}deg)`;

if (pos > window.innerHeight + 80) {

clearInterval(fall);

lemon.remove();

}

}, 20);

}

setInterval(createLemon, 2500);

/* ===========================
   ALTIN PARILTILAR
=========================== */

function sparkle() {

const star = document.createElement("div");

star.style.position = "fixed";
star.style.width = "5px";
star.style.height = "5px";
star.style.borderRadius = "50%";
star.style.background = "#d4af37";
star.style.left = Math.random() * window.innerWidth + "px";
star.style.top = Math.random() * window.innerHeight + "px";
star.style.boxShadow = "0 0 15px #d4af37";
star.style.pointerEvents = "none";
star.style.opacity = "1";
star.style.zIndex = "1";

document.body.appendChild(star);

setTimeout(() => {

star.style.transition = "1s";
star.style.opacity = "0";
star.remove();

}, 1000);

}

setInterval(sparkle, 300);

/* ===========================
   BUHAR EFEKTİ
=========================== */

function steamEffect() {

const steam = document.createElement("div");

steam.style.position = "fixed";
steam.style.bottom = "0";
steam.style.left = Math.random() * window.innerWidth + "px";
steam.style.width = "18px";
steam.style.height = "18px";
steam.style.borderRadius = "50%";
steam.style.background = "rgba(255,255,255,.18)";
steam.style.filter = "blur(10px)";
steam.style.pointerEvents = "none";
steam.style.zIndex = "0";

document.body.appendChild(steam);

let y = 0;

const smoke = setInterval(() => {

y += 2;

steam.style.bottom = y + "px";
steam.style.opacity = 1 - y / 350;

if (y > 350) {

clearInterval(smoke);

steam.remove();

}

}, 20);

}

setInterval(steamEffect, 500);

console.log("%c🦪 Midye Kolik", "color:#d4af37;font-size:24px;font-weight:bold;");
console.log("Premium Website © 2026");

/*==================================
 PREMIUM İMLEÇ EFEKTİ
==================================*/

const cursor=document.createElement("div");

cursor.style.width="18px";
cursor.style.height="18px";
cursor.style.border="2px solid #d4af37";
cursor.style.borderRadius="50%";
cursor.style.position="fixed";
cursor.style.pointerEvents="none";
cursor.style.zIndex="99999";
cursor.style.transition="transform .15s ease";
cursor.style.transform="translate(-50%,-50%)";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.menu-card,.gallery-img").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1.8)";

});

item.addEventListener("mouseleave",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1)";

});

});

/*==================================
 SAYAÇ ANİMASYONU
==================================*/

document.querySelectorAll("[data-count]").forEach(counter=>{

let target=Number(counter.dataset.count);

let value=0;

const speed=Math.max(10,Math.floor(1500/target));

const timer=setInterval(()=>{

value++;

counter.innerText=value;

if(value>=target){

clearInterval(timer);

}

},speed);

});

/*==================================
 YAZI YAZMA EFEKTİ
==================================*/

const title=document.querySelector(".hero h4");

if(title){

const text=title.textContent;

title.textContent="";

let i=0;

const typing=setInterval(()=>{

title.textContent+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},70);

}

/*==================================
 PREMIUM PARILTI
==================================*/

setInterval(()=>{

document.querySelectorAll(".gold-btn,.siparis-btn").forEach(btn=>{

btn.animate([

{filter:"brightness(1)"},

{filter:"brightness(1.4)"},

{filter:"brightness(1)"}

],{

duration:1200

});

});

},3500);

/*==================================
 TELEFON TİTREŞİMİ
==================================*/

document.querySelectorAll("a[href*='wa.me']").forEach(btn=>{

btn.addEventListener("click",()=>{

if(navigator.vibrate){

navigator.vibrate([80,50,80]);

}

});

});

/*==================================
 KONSOL MESAJI
==================================*/

console.clear();

console.log("%cMIDYE KOLİK","font-size:30px;color:#d4af37;font-weight:bold;");
console.log("%cPremium Website 2026","color:white;font-size:14px;");