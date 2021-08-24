function calcularIMC(peso, altura) {
    return peso / (altura ** 2)
}

function classificar(imc) {

    //
    let categoria

    if(imc < 18.5) {
        categoria = "abaixo do peso. Precisa comer mais!!"
    }else if(imc < 25) {
        categoria = "com peso ideal. <span class='azul'>Parabéns campeão(a)!</span>"
    }else if(imc < 30) {
        categoria = "levemente acima do peso. Cuidado com as gordurinhas!!"
    }else if(imc < 35) {
        categoria = "com obesidade grau I."
    }else if(imc < 40) {
        categoria = "com obesidade grau II."
    }else{
        categoria = "com obesidade grau III.<span class='red'>Cuidado</span>"
    }

    return categoria
}

function camposValidos() {
    return document.querySelector("form").reportValidity()
}

//a constante resultado foi criada dentro da função para não ser uma constante global.
function exibirResultado() {

    /*querySelector tem a mesma função do getElementById a diferença entre eles é que o querySelector pode ser usado da seguinte forma: 
        const nome = document.querySelector("#nome")
        const nome = document.querySelector(".nome")
    */
    const resultado = document.getElementById("resultado") 
    const nome = document.getElementById("nome").value

    //replice tem a a função de trocar valores. 
    const peso = document.getElementById("peso").value.replace(",",".") 
    const altura = document.getElementById("altura").value.replace(",",".")

    if (camposValidos()) {
        const imc = calcularIMC (peso, altura)
        const classificacao = classificar(imc)

        //toFixed -> fixa as casas decimais.
        resultado.innerHTML = `${nome} seu IMC é ${imc.toFixed(1)} e você está ${classificacao}`
    } else {
        resultado.textContent = "Preencha os campos!!"
    }
}

function capturarEnter(evento) {
    if(evento.key == "Enter") {
        exibirResultado()
    }
}

//Eventos
document.getElementById("calcular")
.addEventListener("click", exibirResultado)

//
document.querySelector("form")
.addEventListener("keypress", capturarEnter)
