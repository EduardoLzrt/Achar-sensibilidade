function acharSensi() {
    let sensiQueUsaMouse = parseFloat(document.getElementById('caixa1').value);
    let sensiDoJogo = parseFloat(document.getElementById('caixa2').value);
    let sensiQueQuerMouse = parseFloat(document.getElementById('caixa3').value);

    if (!isNaN(sensiQueUsaMouse) && !isNaN(sensiDoJogo) && !isNaN(sensiQueQuerMouse)) {
        let resultado = (sensiQueUsaMouse * sensiDoJogo) / sensiQueQuerMouse;
        resultado = resultado.toFixed(3); 
        document.getElementById('resultado').innerText = `A sensibilidade que você tem que usar no Valorant é ${resultado}`;

        // Atualiza o valor das caixas de entrada
        document.getElementById('caixa1').value = sensiQueUsaMouse;
        document.getElementById('caixa2').value = sensiDoJogo;
        document.getElementById('caixa3').value = sensiQueQuerMouse;
    } else {
        alert('Use apenas números.');
    }
}

function limpar() {
   document.getElementById('caixa1').value = '';
   document.getElementById('caixa2').value = '';
   document.getElementById('caixa3').value = '';
   document.getElementById('resultado').innerText = '';
};
