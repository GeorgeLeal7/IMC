// Declaração da variável do botão.
const calcular = document.getElementById("calcular")

// Função que será responsável pelo cálculo, declaração das variáveis restantes, e estrutura de decisão para mensagem e correções de bugs.
function imc() {

    // Declaração das variáveis restantes para execução da função. (Obs: colocar dentro dos laços if, pois elas não serão globais)
    const txtNome = document.getElementById("txtNome").value 
    const txtAltura = document.getElementById("txtAltura").value
    const txtPeso = document.getElementById("txtPeso").value
    const resultado = document.getElementById("resultado")

    if (txtNome !== '' && txtAltura !== '' && txtPeso !== '') {
        if (isNaN(txtNome)) {
            
            if (isNaN(txtPeso) && isNaN(txtAltura)) {
                
                return resultado.textContent = 'Informação inválido'
            
            } else {
                
                const valorIMC = (txtPeso / (txtAltura * txtAltura)).toFixed(1) 

                let classificacao = '' 

                // Laço if para mensagem completa.
                if (valorIMC < 18.5) {
                    classificacao = 'abaixo do peso. Precisa ganhar uns quilinhos!!'
                } else if (valorIMC < 24.9) {
                    classificacao = 'com peso ideal. Excelente!!!'
                } else if (valorIMC < 29.9) {
                    classificacao = 'acima do peso. Ta fora de forma!!'
                } else if (valorIMC < 34.9) {
                    classificacao = 'com obesidade grau I. Precisa comer menos.'
                } else if (valorIMC < 40) {
                    classificacao = 'com obesidade grau II. Precisa comer muito menos!!'
                } else {
                    classificacao = 'com obesidade grau III. Cuidado!!!'
                }


                resultado.textContent = `${txtNome} seu IMC é ${valorIMC} e você está ${classificacao}`
            }

        } else {
            
            return resultado.textContent = 'Informação inválido';
        
        }

    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

calcular.addEventListener('click', imc) // Adicinando o botão calcular a função de imc