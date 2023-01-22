/* 

OBJETIVO 01- Quando o usuario clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer
 
    passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando js

    passo 2 - dar um jeito de identificar quando o usuario clicar no botao 

    passo 3 - dar um jeito de pegar o elemento da modal no js

    passo 4 - abrir a modal na tela 

OBJETIVO 02- Quando o usuario clicar no x devemos fechar a modal

    passo 1 - dar um jeito de pegar o elemento de fechar o modal usando o js 

    passo 2 - dar um jeito de identificar quando o usuario clicar no X

    passo 3 - fechar modal

*/


const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

function alternarModal(){
    modal.classList.toggle("aberto");

}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});


