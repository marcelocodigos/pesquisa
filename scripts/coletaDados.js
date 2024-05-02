var dadosUsuario = {};

var dadosEscalaKeller = {respostas};


// Função para coletar dados do usuário
function coletarDados() {
    var nome = document.getElementById('nomeAluno').value;
    var telefone = document.getElementById('telAluno').value;
    var instrutor = document.getElementById('selectInstrutores').value;

    dadosUsuario = {
        nome: nome,
        telefone: telefone,
        instrutor: instrutor
    };
    
    //coleta dados do array da pesquisa
    dadosEscalaKeller=respostas;
    console.log(dadosUsuario)
    console.log(dadosEscalaKeller)
    console.log(text)
}
