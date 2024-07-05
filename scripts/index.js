let text = document.getElementById("text");

let bntCriptografar = document.getElementById("btn-criptografar");

let btnDescriptografar = document.getElementById("btn-descriptografar");


let output = document.getElementById("output");

function criptografarText(text) {
    return text.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat")
};

bntCriptografar.addEventListener("click", () => {
    let textValue = text.value;

    let criptografado = criptografarText(textValue)

    output.innerHTML = criptografado;
});

btnDescriptografar.addEventListener("click", () => {
    let textValue = text.value;

    output.innerHTML = textValue;
})