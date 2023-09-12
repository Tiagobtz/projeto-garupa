const usuario = document.getElementById('email').value
const senha = document.getElementById('senha').value
const botao = document.getElementById('botao')

botao.addEventListener("click", () => {
    checarUsuario()
})

function checarUsuario(){
    if(usuario === ''){
        alert("error")
    }
}