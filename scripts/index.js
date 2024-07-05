let text = document.getElementById("text");

let bntCriptografar = document.getElementById("btn-criptografar");

let btnDescriptografar = document.getElementById("btn-descriptografar");


let output = document.getElementById("output");



bntCriptografar.addEventListener("click", () => {
    let textValue = text.value;

    output.innerHTML = textValue;
});

btnDescriptografar.addEventListener("click", () => {
    let textValue = text.value;

    output.innerHTML = textValue;
})