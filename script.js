const campoLogin = document.getElementById("usarname")
const campoSenha = document.getElementById("senha")
const campoNovoLogin = document.getElementById("newusarname")
const campoNovaSenha = document.getElementById("newsenha")
const campoRepSenha = document.getElementById("repsenha")
const campoTitulo = document.getElementById("titulo")
const campoAutor = document.getElementById("autor")
const CampoGenero = document.getElementById("genero")
const campoIsbn = document.getElementById("isbn")
const lista = document.getElementById("lista")

function logar() {
    let login = campoLogin.value
    let senha = campoSenha.value

    let mensagem = "Usuário ou senha incorreta!"
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
if (bancoDeDados == null) {
    mensagem = "Nenhum usuário cadastrado até o momento";
} else {
    for (let usuario of bancoDeDados) {
        if (usuario.login == login && usuario.senha == senha) {
            window.location.href = "home.html"
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
    
        if(existe(usuario, bancoDeDados)){

            alert("Usuário ja cadastrado!")

        }
        else{

            bancoDeDados.push(usuario)
            localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
            alert("Usuário cadastrado com sucesso!")

        }
        
    
    } else {

            alert("As senhas são diferentes!");
    }

    
    
}
function logout(){

    window.location.href = "index.html"

}
function existe(usuario, bancoDeDados) {

    for(let verificado of bancoDeDados){
        if(verificado.login == usuario.login){
        return true

    }
    }

    return false
}
function criaLivro(){
    const livro = {
        titulo: campoTitulo.value,
        autor: campoAutor.value,
        genero: CampoGenero.value,
        isbn: campoIsbn.value,
    }
    let biblioteca = JSON.parse(localStorage.getItem("bancoDeDados"))
    if(biblioteca == null){
        biblioteca = []
    }
    biblioteca.push(livro)
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
    
}
let aberto = false
function exibe(){
    let livros = ""
    if(!aberto){
        aberto = true
    
    let biblioteca = JSON.parse(localStorage.getItem("biblioteca"))
    if(biblioteca == null){
        livros = "Não há livros cadastrados no momento!"
    }
    }
    else{
        for(let livro of biblioteca){
            livros += "<br><strong>Titulo: </strong>"+livro.titulo
            livros += "<br><strong>Autor: </strong>"+livro.autor
            livros += "<br><strong>Gênero: </strong>"+livro.genero
            livros += "<br><strong>Isbn: </strong>"+livro.isbn
            livros += "<br><strong>____________________________________________</strong>"
        }
        lista.innerHTML = livros
    
    }
    else{
    aberto = false
    lista.innerHTML = ""
}
}


