function acharSensi() {
    let sensiQueUsa = parseFloat(document.getElementById('caixa1').value);
    let sensiValorantQueUsa = parseFloat(document.getElementById('caixa2').value);
    let sensiQueQuer = parseFloat(document.getElementById('caixa3').value);

    if (!isNaN(sensiQueUsa) && !isNaN(sensiValorantQueUsa) && !isNaN(sensiQueQuer)) {
        let resultado = (sensiValorantQueUsa * sensiQueQuer) / sensiQueUsa;
        resultado = resultado.toFixed(3); // Limita o resultado a três números após a vírgula
        document.getElementById('resultado').innerText = `A sensibilidade que você tem que usar no Valorant é ${resultado}`;

        // Atualiza o valor das caixas de entrada
        document.getElementById('caixa1').value = sensiQueUsa;
        document.getElementById('caixa2').value = sensiValorantQueUsa;
        document.getElementById('caixa3').value = sensiQueQuer;
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
