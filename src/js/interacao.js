const usuario = document.getElementById('usuario')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmacaoSenha = document.getElementById('confirmacao-senha')
const formulario = document.getElementById('formulario')

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    checarFormulario()
})

usuario.addEventListener("blur", function(){
    checarUsuario()
})

email.addEventListener("blur", function(){
    checarEmail()
})

senha.addEventListener("blur", function(){
    checarSenha()
})

confirmacaoSenha.addEventListener("blur", function(){
    checarConfirmacaoDaSenha()
})

function checarFormulario(){
    checarUsuario()
    checarEmail()
    checarSenha()
    checarConfirmacaoDaSenha()

    const formItems = formulario.querySelectorAll('.form-content')
    const isValid = [...formItems].every( (item) => {
        return item.className === 'form-content'
    })

    if(isValid){
        alert('CADASTRADO COM SUCESSO')
    }
}

function checarUsuario(){
    const usuarioValue = usuario.value
    if(usuarioValue === ''){
        errorInput(usuario, 'Usuário obrigatório')
    } else {
        formItem = usuario.parentElement
        formItem.className = 'form-content'
    }
}

function checarEmail(){
    const emailValue = email.value
    if(emailValue === ''){
        errorInput(email, 'E-mail obrigatório')
    } else {
        formItem = email.parentElement
        formItem.className = 'form-content'
    }
}

function checarSenha(){
    const senhaValue = senha.value
    if(senhaValue === ''){
        errorInput(senha, 'Senha obrigatória')
    } else if (senhaValue.length < 8){
        errorInput(senha, 'A senha precisa ter no mínimo 8 caracteres')
    } else {
        formItem = senha.parentElement
        formItem.className = 'form-content'
    }
}

function checarConfirmacaoDaSenha(){
    const confirmacaoSenhaValue = confirmacaoSenha.value
    const senhaValue = senha.value
    if(confirmacaoSenhaValue === ''){
        errorInput(confirmacaoSenha, 'É obrigatório confirmar a senha')
    } else if (confirmacaoSenhaValue !== senhaValue){
        errorInput(confirmacaoSenha, 'Senha diferente da anterior')
    } else {
        formItem = confirmacaoSenha.parentElement
        formItem.className = 'form-content'
    }
}

function errorInput(input, mensagem){
    const formItem = input.parentElement
    const textoMensagem = formItem.querySelector("a")

    textoMensagem.innerText = mensagem
    formItem.className = "form-content error"
}