console.log("Script inicializado!");

const MeninasTitulo = document.querySelector(".Meninas");
const ViloesTitulo = document.querySelector(".Viloes");
const Florzinha = document.querySelector(".Florzinha");
const Docinho = document.querySelector(".Docinho");
const Lindinha = document.querySelector(".Lindinha");
const Macaco = document.querySelector(".Macaco");
const Ele = document.querySelector(".Ele");
const MaisGrana = document.querySelector(".MaisGrana");
const Sedusa = document.querySelector(".Sedusa");
const Desordeiros = document.querySelector(".Desordeiros");
const soundEffect = new Audio('/sound/starsound.mp3');

setInterval(() => {
    const ColorsMeninasTitulo = ['green','red','blue'];

    MeninasTitulo.style.backgroundColor = ColorsMeninasTitulo[Math.floor(Math.random() * 3)];

    EvilTitle(Math.floor(Math.random() * 2));

}, 1000);



function EvilTitle(whatever){

    if(whatever == 1){
        ViloesTitulo.innerHTML = "Vilões &#9760;";
        ViloesTitulo.style.backgroundColor = "black";
        ViloesTitulo.style.color = "#fff";
    }

    else{
        ViloesTitulo.innerHTML = "Personagens &#128124;";
        ViloesTitulo.style.color = "black";
        ViloesTitulo.style.backgroundColor = "#fff";

    }
}


function Acao(obj){
    soundEffect.play();

    if(obj == "Florzinha"){
        Florzinha.innerHTML = "&#127802; Florzinha &#127802;";
        Florzinha.style.fontWeight = "bold";
        Florzinha.style.backgroundImage = "url('/img/florzinha-bg.gif')";
    }

    if(obj == "Docinho"){
        Docinho.innerHTML = "&#127852; Docinho &#127852;";
        Docinho.style.fontWeight = "bold";
        Docinho.style.backgroundImage = "url('/img/docinho-bg.webp')";
    }

    if(obj == "Lindinha"){
        Lindinha.innerHTML = "&#127776; Lindinha &#127776;";
        Lindinha.style.fontWeight = "bold";
        Lindinha.style.backgroundImage = "url('/img/lindinha-bg.webp')";
    }

    if(obj == "Macaco"){
        Macaco.innerHTML = "&#129421; Macaco Louco &#129421;";
        Macaco.style.fontWeight = "bold";
        Macaco.style.backgroundImage = "url('/img/macaco-bg.gif')";
    }

    if(obj == "Ele"){
        Ele.innerHTML = "&#129408; Ele &#129408;";
        Ele.style.fontWeight = "bold";
        Ele.style.backgroundImage = "url('/img/ele-bg.gif')";
    }

    if(obj == "MaisGrana"){
        MaisGrana.innerHTML = "&#128181; Princesa MaisGrana &#128181;";
        MaisGrana.style.fontWeight = "bold";
        MaisGrana.style.backgroundImage = "url('/img/maisgrana-bg.gif')";
    }

    if(obj == "Sedusa"){
        Sedusa.innerHTML = "&#128131;&#127995; Sedusa &#128131;&#127995;";
        Sedusa.style.fontWeight = "bold";
        Sedusa.style.backgroundImage = "url('/img/sedusa-bg.gif')";
    }

    if(obj == "Desordeiros"){
        Desordeiros.innerHTML = "&#129490;&#127995;&#129490;&#127997;&#129490;&#127996; Meninos Desordeiros &#129490;&#127995;&#129490;&#127997;&#129490;&#127996;"
        Desordeiros.style.fontWeight = "bold";
        Desordeiros.style.backgroundImage = "url('/img/desordeiros-bg.jpg')";
    }
}


