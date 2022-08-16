console.log("Script inicializado!");

const MeninasTitulo = document.querySelector(".Meninas");
const ViloesTitulo = document.querySelector(".Viloes");


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


