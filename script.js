// DIGITAÇÃO
const text = "Olá, eu sou Quéren Moreira";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing, 50);
}
}
typing();


// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", ()=>{
reveals.forEach(el=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
});


// PARTÍCULAS
tsParticles.load("particles-js", {
particles: {
number: { value: 60 },
color: { value: ["#ff007f", "#8a2be2"] },
shape: { type: "circle" },
opacity: { value: 0.5 },
size: { value: 4 },
move: { enable: true, speed: 1 }
}
});