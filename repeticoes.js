function exemploFor () {
// for
//1° Declarar contador
//2° = Condição (enquanto)
//3° Incremento
for (let contador = 1; contador <= 5; contador++) {

    alert(contador);
}

}

function exemplowhile (){

    debugger;

    let contador = 1;

    while(contador <= 5) {
        console.log(contador);
    }
} 

function exemploDoWhile (){
    let contador =1;

    do {

        alert(contador);
        contador++;
    } while (contador <= 5);
}
function exemploDoWhile1 (){
    let contador =1;

    do {

        alert(contador);
        contador++;
    } while (contador <= 10);
}

function exemploDoWhile2 (){
    
let numero = Number(prompt("Digite um número para ver a tabuada:"));


for (let i = 1; i <= 10; i++) {
    alert(`${numero} x ${i} = ${numero * i}`);
}

}

 

function exe3 () {
// Solicita um número N ao usuário
let N = Number(prompt("Digite um número N:"));

let soma = 0;
let i = 1;

while (i <= N) {
    soma += i;
    i++;
}


console.log(`A soma dos primeiros ${N} números naturais é: ${soma}`);

}

function exe4(){
    for (let i = 2; i <= 50; i += 2) {
        console.log(i);
    }
    
}
function exe5() {
    let numero = Number(prompt("Digite um número para iniciar a contagem regressiva:"));

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
    console.log("Contagem regressiva concluída!");
}