const campoLogin = document.getElementById("usarname")
const campoSenha = document.getElementById("senha")
const campoNovoLogin = document.getElementById("newusarname")
const campoNovaSenha = document.getElementById("newsenha")
const campoRepSenha = document.getElementById("repsenha")

function logar() {
    let login = campoLogin.value
    let senha = campoSenha.value

    let mensagem = "Usuário ou senha incorreta!"
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
if (bancoDeDados == null) {
    mensagem = "Nenhum usuário cadastrado até o momento";
} else {
    // Lógica para verificar as credenciais de login
    for (let usuario of bancoDeDados) {
        if (usuario.login == login && usuario.senha == senha) {
            mensagem = "Parabéns, você logou!";
            localStorage.setItem("logado", JSON.stringify(usuario));
            break;
        }
    }
    




}
alert(mensagem)
}
function cadastrar() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value,
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
        if(bancoDeDados == null){
            bancoDeDados = []
        }
        bancoDeDados.push(usuario)
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
        alert("Usuário cadastrado com sucesso!")
    } else {
        alert("As senhas são diferentes!");
    }
    
    
}