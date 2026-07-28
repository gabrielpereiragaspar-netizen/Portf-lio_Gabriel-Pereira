const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.style.background="#FFD54F";
card.style.color="#000";

setTimeout(()=>{
card.style.background="#1565C0";
card.style.color="#fff";
},500);

});

});

console.log("Portfólio carregado com sucesso!");
