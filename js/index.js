


const userOption = instruction => {
    let option = prompt(instruction).toLowerCase();
    
  
    while (option !== "piedra" && option !== "papel" && option !== "tijera") {
      alert("Respuesta invalida. Elige: piedra, papel o tijera");
      option = prompt(instruction).toLowerCase();
    }
  /////////////////////////////////////////////////////
    if (option === "piedra") { 
      alert("Elegiste piedra.");
    } else if (option === "papel") {
      alert("Elegiste papel.");
    } else {
        alert("Elegiste tijera")
    }

    return option;
 ////////////////////////////////////////////////////////
}

const pcOption = () => {
    let options = ["piedra", "papel", "tijera"];
    let randomWord = Math.floor(Math.random() * 3);
    return options[randomWord];
}

const winner = (user, pc) => {
    if (user === pc) {
        alert ("Es un empate!");
    } else if (
        (user === "piedra" && pc === "tijera") ||
        (user === "papel" && pc === "piedra") ||
        (user === "tijera" && pc === "papel")
    ) {
        alert ("Ganaste!");
    } else {
        alert (`Perdiste :( la pc eligió ${pc}`);
    }
}




const playGame = () => {
    let instruction = "Elige: piedra, papel o tijera";
    let user = userOption(instruction);
    let pc = pcOption();

    alert(`Tu elección: ${user} \n Elección de la pc: ${pc}`);

    let result = winner(user, pc);
    alert(result);
    if (result === "Ganaste!") {
        userWins++;
    } else if (result.includes("Perdiste")) {
        pcWins++;
    }
}
let userWins = 0;
let pcWins = 0;

for (let i = 0; i <= 3; i++) {

  switch (i) {
    case 1:
      alert("¡Primera ronda!");
      playGame();
      break;
    case 2:
      alert("¡Segunda ronda!");
      playGame();
      break;
    case 3:
      alert("¡Tercera ronda!");
      playGame();
      break;
    default:
      alert("!Juguemos a Piedra, Papel o Tijera!");
      break;
  }
}

