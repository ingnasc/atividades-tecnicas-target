let inicioSequencia = [0, 1];

function sequenciaFibonacci(n) {
    while (inicioSequencia[inicioSequencia.length - 1] < n) {
        let proximoNumero = inicioSequencia[inicioSequencia.length - 1] + inicioSequencia[inicioSequencia.length - 2];
        inicioSequencia.push(proximoNumero);
    }

    return inicioSequencia;
}

function verificacaoFibonacci() {
        const numeroRecebido = parseInt(document.getElementById("numberInput").value);
        
        let sequencia = sequenciaFibonacci(numeroRecebido);

        let mensagemResultado;
        if (sequencia.includes(numeroRecebido)) {
            mensagemResultado = `O número ${numeroRecebido} pertence à sequência de Fibonacci.`;
        } else {
            mensagemResultado = `O número ${numeroRecebido} não pertence à sequência de Fibonacci.`;
        }

        document.getElementById("resultado").textContent = mensagemResultado;
}

