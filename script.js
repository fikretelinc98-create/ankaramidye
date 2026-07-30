window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},2200);

});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.92)";
header.style.backdropFilter="blur(20px)";

}else{

header.style.background="rgba(0,0,0,.55)";

}

});

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll(".feature,.stats div,.gallery-grid img,.about,.review-card,.contact").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

observer.observe(el);

});

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.95)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="999999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

const hero=document.querySelector(".hero h1");

let buyuk=true;

setInterval(()=>{

hero.style.transform=buyuk?"scale(1.03)":"scale(1)";

buyuk=!buyuk;

},1500);

document.addEventListener("contextmenu",e=>e.preventDefault());

document.addEventListener("keydown",e=>{

if(e.key==="F12"){

e.preventDefault();

}

});
// Butonlara Tıklama Efekti
document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("click",function(){

this.animate([

{transform:"scale(1)"},

{transform:"scale(.92)"},

{transform:"scale(1)"}

],{

duration:250

});

});

});

// Video Yavaş Oynatma
const video=document.querySelector("video");

if(video){

video.playbackRate=.85;

}

// Sayfa Yukarı Çık Butonu

const topBtn=document.createElement("div");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="topButton";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.left="20px";
topBtn.style.bottom="20px";
topBtn.style.width="60px";
topBtn.style.height="60px";
topBtn.style.borderRadius="50%";
topBtn.style.background="#d4af37";
topBtn.style.color="#000";
topBtn.style.display="flex";
topBtn.style.justifyContent="center";
topBtn.style.alignItems="center";
topBtn.style.fontSize="24px";
topBtn.style.cursor="pointer";
topBtn.style.boxShadow="0 0 25px rgba(212,175,55,.5)";
topBtn.style.opacity="0";
topBtn.style.transition=".4s";
topBtn.style.zIndex="99999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";

}else{

topBtn.style.opacity="0";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Konsol Mesajı

console.log("Ankara Midye Premium Website");
console.log("Telefon: 0546 280 53 74");
console.log("Instagram: @midyekolik47");
console.log("TikTok: @midyekolik47");
