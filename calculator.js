
let calcular = document.getElementById("calcular")
calcular.addEventListener("click",imc)
function imc () {

    let resultado=document.getElementById("resultado")
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value

   
    const valorimc= (peso/(altura*altura)).toFixed(2);

   

   
                                                  

         if (valorimc < 18,5) {
            resultado.textContent = `Seu IMC é ${valorimc} Você está abaixo do peso`
    
        }if (valorimc >=18.5 && valorimc <=25) {
            resultado.textContent = `Seu IMC é ${valorimc} Você está com o peso normal`
    
        } if(valorimc > 25 && valorimc <= 30) { 
            resultado.textContent= `Seu IMC é ${valorimc} Você está com sobrepeso`
    
        } if(valorimc >30 && valorimc <=35) {
            resultado.textContent = `Seu IMC é ${valorimc} Você está com obesidade moderada`
    
        } if(valorimc >35  && valorimc <=40) {
            resultado.textContent= `Seu IMC é ${valorimc} Você está com obesidade severa! `
        } if(valorimc >40) {
            resultado.textContent = 'Cuidado, voce está com obesidade morbida !'
        }else{
            if(peso== 0 && altura ==0 ) {
                
                  resultado.textContent = "Preencha os dados acima"; 
               
            }
        }

}

