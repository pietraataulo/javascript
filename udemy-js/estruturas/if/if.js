// Estrutura de Controle - if

let idade = 19;

if (idade == 19) {
   console.log("A idade é = 19");
}

if (idade > 25) {
    console.log("A idade é maior que 25");
}

let nome = "Matheus";

if (nome == "Matheus" && idade > 10) {
    console.log("Liberado!");
}

let passaporte = true;

if((nome == "Matheus" && idade > 30) || passaporte == true) {
    console.log("Liberado!")
}

// if else
let velocidade = 100

if (velocidade <= 80) {
    console.log("Não foi multado")
} else {
    console.log("Foi multado")
}