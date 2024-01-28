let color = "black";

//Fonction taille des divs

function input() {
  let Message = document.getElementById("Message");
  let input = prompt("Veuillez Entrez une Taille ");
  if (input == "") {
    Message.innerHTML = "Veuillez Entrz un chiffre";
  } else if (input < 0 || input > 100) {
    Message.innerHTML = "Veuillez Entrer un chiffre entre 1 et 100";
  } else {
    Message.innerHTML = "Vous Pouvez Jouer";
  }
  return input;
}

//Racorder input et creeGrille
const btn_Taille = document.getElementById("Taille");
btn_Taille.addEventListener("click", function () {
  let taille = input();
  creerGrille(taille);
});
//Fonction pour creer la Div

function creerGrille(taille) {
  let container = document.getElementById("container-principal");

  container.style.gridTemplateColumns = `repeat(${taille},1fr)`;
  container.style.gridTemplateRows = `repeat(${taille},1fr)`;

  let nombreDivs = taille * taille;

  for (let i = 0; i < nombreDivs; i++) {
    let div = document.createElement("div");

    container.insertAdjacentElement("beforeend", div);

    div.addEventListener("mouseover", colorDiv);
  }
}
creerGrille(16);

//fonction reload pour recharger la page
const reload = document.getElementById("reload");
reload.addEventListener("click", function () {
  window.location.reload();
});

//fonction des conditions pour afficher les couleurs
function colorDiv() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}

//fonction choisir couleur
function choisirCouleur(choiceColor) {
  color = choiceColor;
}
