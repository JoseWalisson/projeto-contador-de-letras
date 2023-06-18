const contarButton = document.getElementById('contarButton');

contarButton.addEventListener("click", function() {
    const palavras = document.getElementsByClassName('texto')[0];
    const valor = palavras.value.replace(/\s/g, "");

    const contagem = {}

    for (let palavra = 0; palavra < valor.length; palavra++) {
        let letra = valor.charAt(palavra.length);

        if (contagem[letra]) {
            contagem[letra]++;
        } else {
            contagem[letra] = 1;
        }

        for (let letra in contagem) {
            let addPalavra = document.querySelector('.palavra > span');
            addPalavra.innerHTML = contagem[letra];
        }
    }
});