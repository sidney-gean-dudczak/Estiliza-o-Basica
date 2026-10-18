// Funções de acessibilidade
let tamanhoFonte = 100;
let tamanhoMain = 800;
let main = document.querySelector("main");

function aumentarFonte() {
    // Só aumenta se for menor que o limite de 150%
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        tamanhoMain += 50;
    main.style.maxWidth = tamanhoMain + "px";
    }
}

function diminuirFonte() {
    // Só diminui se for maior que o limite de 70%
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        
        if (tamanhoMain > 800) {
            tamanhoMain -= 50;
            main.style.maxWidth = tamanhoMain + "px";
        }
    }
}

// Ativa o alto contraste alternando a sua classe original no body
function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}
