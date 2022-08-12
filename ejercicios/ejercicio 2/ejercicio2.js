var resultado = "";
do{
    var cadena = prompt("Introduce una palabra")
    if (resultado == ""){
    resultado = resultado + cadena;
    }else resultado = resultado + "-" + cadena;
}while(confirm("Desea seguir?"));