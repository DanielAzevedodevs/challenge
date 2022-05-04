const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="nome"
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"]
    ]
    StringEncriptada = StringEncriptada.toLowerCase();


    for (let i= 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }


    return stringEncriptada;
}