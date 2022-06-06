var cadena = prompt('Introduce una cadena palíndroma:');
var cadenaInversa = ""

function esPalindromo(cadena){
    
    for (var i = cadena.length - 1; i >= 0; i--) { 
        cadenaInversa += cadena[i]; 
    }
    console.log(cadena);
    console.log(cadenaInversa);

    if (cadena == cadenaInversa){
        alert(`La cadena es palíndroma!`);
    } else{
        alert(`La cadena no es palíndroma!`)
    }
}esPalindromo(madam)