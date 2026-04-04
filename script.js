// scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", ()=>{
reveals.forEach(el=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
});


// partículas
tsParticles.load("particles-js", {
particles: {
number: { value: 50 },
color: { value: ["#ff007f", "#8a2be2"] },
size: { value: 5 },
move: { enable: true, speed: 1 }
}
});
const text1 = "Olá, eu sou Quéren Moreira";
const text2 = "Desenvolvedora Front-End focada na criação de interfaces modernas, responsivas e funcionais, com interesse em automação e eficiência de sistemas.";

let i = 0;
let j = 0;

function typingName(){
const el = document.getElementById("typing");

if(el && i < text1.length){
el.innerHTML += text1.charAt(i);
i++;
setTimeout(typingName, 100);
}else{
typingSubtitle();
}
}

function typingSubtitle(){
const el = document.getElementById("subtitle");

if(el && j < text2.length){
el.innerHTML += text2.charAt(j);
j++;
setTimeout(typingSubtitle, 40);
}
}

window.onload = () => {
typingName();
};window.addEventListener("load", ()=>{
const loader = document.getElementById("loader");
if(loader){
loader.style.display = "none";
}
});