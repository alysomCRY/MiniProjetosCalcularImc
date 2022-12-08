const button = document.getElementById("button");


function imc () {
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const resultado = document.getElementById("resultado");

    if(name !== "" && height !== "" && weight !== ""){ 
    
        const valorIMC = (weight / (height * height)).toFixed(2);

        resultado.textContent = valorIMC;

        let classificacao = "";
        
        if (valorIMC < 18.5){
            classificacao = "Abaixo do peso";
        }else if (valorIMC < 25){
            classificacao = "com peso ideal";
        }else if (valorIMC < 30){
            classificacao = "um pouco a cima do peso"
        }else if (valorIMC < 35){
            classificacao = "esta com obesidade grau 1"
        }else if (valorIMC < 40){
            classificacao = "esta com obesidade grau 2"
        }else {
            classificacao = "obesidade grau 3.Procure um medico!"
        }
        resultado.textContent = `${name} seu IMC é ${valorIMC} e você esta ${classificacao}`; 

  }else{
    resultado.textContent = "Preencha todos os campos";
  }

}

button.addEventListener("click", imc);

