
function reloj(){
    //Cogemos la fecha de hoy
    hora = new Date();

    //Cogemos y Setteamos las horas/minutos/segundos
    document.getElementById("horas").innerHTML = hora.getHours();

    if(hora.getMinutes() < 10){
        document.getElementById("minutos").innerHTML  = "0" + hora.getMinutes();
    }else{
        document.getElementById("minutos").innerHTML  = hora.getMinutes();
    }
    
    if(hora.getSeconds() < 10){
        document.getElementById("segundos").innerHTML = "0" + hora.getSeconds();
        console.log(hora.getSeconds);
    }else{
        document.getElementById("segundos").innerHTML = hora.getSeconds();
    }

    //Cada 1s (1000 milisegundos) actualizamos el metodo
    setTimeout("reloj()",1000);
}