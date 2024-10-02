function verificacao() {
    let textoDigitado = document.getElementById("textInput").value;
    
    const textoMinusculo = textoDigitado.toLowerCase();
    
    let contador = 0;
    
    for (let i = 0; i < textoMinusculo.length; i++) {
        if (textoMinusculo[i] === 'a') {
            contador++;
        }
    }
    
    let mensagemResultado = contador > 0 
        ? `A letra 'a' aparece ${contador} no texto digitado.` 
        : "A letra 'a' não aparece no texto digitado.";
    
    document.getElementById("resultado").textContent = mensagemResultado;
}