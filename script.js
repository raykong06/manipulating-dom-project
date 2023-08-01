let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");

let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");

pButton.onclick = function(){
    pDiv.style.display = "block";
    imgDiv.style.display = "none";
    let statement = document.createElement("p");
    statement.innerHTML = "Hot chocolate is bad today";
    statement.style.backgroundColor = "black";
    statement.style.color = "white";
    pDiv.appendChild(statement);
}

imgButton.onclick = function(){
    pDiv.style.display = "none";
    imgDiv.style.display = "block";
    let image = document.createElement("img");
    image.src = "https://upload.wikimedia.org/wikipedia/en/a/a6/Pokémon_Pikachu_art.png";
    imgDiv.appendChild(image);
}