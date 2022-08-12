//introduce una nota
let nota = prompt("Introduce tu nota");

//COMPRUEBA QUE LA NOTA INTRODUCIDA ES UN NÚMERO 
if (Number(nota) == nota) {
  
    //SI ESTA ENTRE 0 Y 3
     
    if (nota <= 3 & nota >= 0) {
         
    //IMPRIME EN PANTALLA EL MENSAJE
        document.write("La nota fue muy deficiente");
     
    }

    if (nota <=5  & nota > 3) {
    
        //IMPRIME EN PANTALLA EL MENSAJE
        document.write("La nota fue Insuficiente");
         
    }
    if (nota ==6  & nota > 5) {
           
        //IMPRIME EN PANTALLA EL MENSAJE
        document.write("La nota fue Suficiente");
         
    }
    if (nota <=7  & nota > 6) {
           
        //IMPRIME EN PANTALLA EL MENSAJE
        document.write("La nota fue Bien");
         
    }
    if (nota <=9  & nota >= 7) {  
        //IMPRIME EN PANTALLA EL MENSAJE
        document.write("La nota fue Notable");
    }
    if (nota > 9) {   
        //IMPRIME EN PANTALLA EL MENSAJE
        document.write("La nota fue Sobresaliente");
         
    }
      
   }

   else {
    //MUESTRA UN MENSAJE
   alert("Introduce un numero válido"); 
}


