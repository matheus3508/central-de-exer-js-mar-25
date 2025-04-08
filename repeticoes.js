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

    do{

        alert(contador);
        contador++;
    } while (false)
}
exemploDoWhile()