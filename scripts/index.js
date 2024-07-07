let text = document.getElementById("text");

let bntCriptografar = document.getElementById("btn-criptografar");

let btnDescriptografar = document.getElementById("btn-descriptografar");

let output = document.getElementById("output");

let result = "";



function criptografarText(text) {
    return text.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
};

function descriptografarText(text) {
    return text.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
};

function filtrarTexto(input) {
    input.value = input.value.replace(/[^a-z\s]/g, '');
};

function addCopyButtonEvent() {
    const copyButton = document.querySelector(".btn-copiar");

    if(copyButton){
        copyButton.addEventListener("click", () => {
            const mensagem = document.querySelector(".mensagem");
            if(mensagem){
                navigator.clipboard.writeText(mensagem.textContent).then(() => {
                    mensagem.textContent = "Nenhuma mensagem";
                });
            };
        });
    };
};

text.addEventListener("input", () => {
    filtrarTexto(text);
});

bntCriptografar.addEventListener("click", () => {
    let textValue = text.value;

    let criptografado = criptografarText(textValue);

    limparCampoTexto();

    output.style.justifyContent = "space-between";

    result = 
        `
            <p class="mensagem">${criptografado}</p>
            <button class="btn-copiar">copiar</button>
        `;

    actionEvent();
});

btnDescriptografar.addEventListener("click", () => {
    let textValue = text.value;

    let descriptografar = descriptografarText(textValue);

    limparCampoTexto();

    output.style.justifyContent = "space-between";

    result = 
        `
            <p class="mensagem">${descriptografar}</p>
            <button class="btn-copiar">copiar</button>
        `;

    actionEvent();
});

function actionEvent() {
    output.innerHTML = result;

    addCopyButtonEvent();
};

function limparCampoTexto() {
    text.value = "";
}