const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaotrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagem/sun.png");
    } else {
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagem/moon.png");
    }
});