var resto = 0;
var letra = "";
var array = ["T", "R", "W", "A", "G", "M", "Y","F","P", "D"," X"," B", "N","J", "Z", "S", "Q","V", "H"," L", "C", "K", "E"];
do{
    var numero = prompt("Introduce tu DNI")
    if (Number(numero) == numero){
        numero = Number(numero)
        (numero >= 0 & numero <= 99999999){
            resto= numero % 23;
        }
        if (resto >= 0 & resto <=23){
            
        }

    }else{
        if (numero = undefined)
        alert("No es un numero, ingrese nuevamente");
    }

}while(numero!=undefined);