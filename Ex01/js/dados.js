
//Generamos los dados
dado1 = Math.floor((Math.random()*6)+1);
dado2 = Math.floor((Math.random()*6)+1);

//Sumamos los dados
sumaDados = dado1 + dado2;

//Contador de aparicciones
contadorResultado = 0;

//Info por consola
console.log('Dado 1 :' + dado1);
console.log('Dado 2 :' + dado2);
console.log('Suma de dados: ' + sumaDados);

//Bucle para ver las apariciones
for (let index = 0; index < 36000; index++) {
    dado1 = Math.floor((Math.random()*6)+1);
    dado2 = Math.floor((Math.random()*6)+1);

    //Si la suma de los nuevos dados coincide con la suma de los primeros dados...
    if(dado1+dado2 == sumaDados){
        contadorResultado++;//Se añade 1 al contador
    }
}

//Info por consola de las apariciones
console.log('Apariciones: ' + contadorResultado);