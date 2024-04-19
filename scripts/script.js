var respostas=[null,null,null,null,null];

document.getElementById("etapa-1").addEventListener("click",function(){
 
     //mostra a etapa 2 e esconde a etapa1
     const etapa2 = document.querySelector(".etapa-2");
     const etapa1 = document.querySelector(".etapa-1")
     etapa2.classList.toggle("remove");
     etapa1.classList.toggle("remove");
// Certifique-se de que o script é executado após ter os dados disponíveis
// Certifique-se de que o elemento com ID "selectInstrutores" existe na sua página HTML

   
    
});

var perguntaAtual =0 
continuarEtapa2=()=>{
  let telefoneVal= document.getElementById("telAluno")

    if(document.getElementById("nomeAluno").value==""){
      alert("Por Favor Digite Seu Nome ")
    }
    else if(telefoneVal.value=="")
    {
      alert("Por Favor, Digite o Seu Celular.")
    }
    else{
      const etapa2 = document.querySelector(".etapa-2");
      etapa2.classList.toggle("remove");
      const etapa3 = document.querySelector(".etapa-3");
      etapa3.classList.toggle("remove"); 
      montaPerguntas();
    }
    
   
}


    
montaPerguntas=()=>{
    
    var perguntaTEXT = document.querySelector("#perguntaAtual");
    var perguntaTEXTPaginacao = document.querySelector("#texto-pergunta-atual");
    perguntaTEXTPaginacao.textContent = `Pergunta ${perguntaAtual+1} de ${instrutoresPerguntas.perguntas.length}`;
    perguntaTEXT.textContent =`${instrutoresPerguntas.perguntas[perguntaAtual].pergunta}`;
    perguntaAtual++
   
    var botoes = document.querySelectorAll(".keller");
   
    botoes.forEach(function (botao) {
      botao.addEventListener('click', function () {
        // Remove a classe 'selected' de todos os botões
        botoes.forEach(function (b) {
          b.classList.remove('selected');
        });
  
        // Adiciona a classe 'selected' apenas ao botão clicado
        botao.classList.toggle('selected');
      });
  });
  // Evento para avançar para a próxima pergunta
var botaoProximaPergunta = document.querySelector('#proximaPergunta');


botaoProximaPergunta.addEventListener('click', function() {
   
    // Remove a classe 'selected' de todos os botões ao avançar para a próxima pergunta
    botoes.forEach(function(b) {
        b.classList.remove('selected');
    });
  

    
  });
  




    if(perguntaAtual==instrutoresPerguntas.perguntas.length){
        perguntaFinal();
    }
   
}



  
perguntaFinal=()=>{
    //perguntaAtualFinal
    
    const etapa3 = document.querySelector(".etapa-3");
    var  etapa4 = document.querySelector(".etapa-4");
    etapa3.classList.toggle("remove"); 
    etapa4.classList.toggle("remove");

    var perguntaFinal = document.getElementById("perguntaAtualFinal");
    perguntaFinal.textContent =`${instrutoresPerguntas.perguntas[perguntaAtual-1].pergunta}`;
  var texto_final= document.getElementById("final").value;
 
 
}


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.keller').forEach(function (botao) {
    botao.addEventListener('click', function () {
      // Remove a classe 'selected' de todos os botões
      document.querySelectorAll('.keller').forEach(function (b) {
        b.classList.remove('selected');
      });

      // Adiciona a classe 'selected' apenas ao botão clicado
      botao.classList.add('selected');
      
      // Exibe no console o valor do botão clicado
      console.log(botao.textContent);
      let valor= botao.getAttribute('data-value');
      respostas[perguntaAtual-1]=valor
      
      

    });
  });
});

var dadosUsuario = {};
var dadosEscalaKeller = {respostas};

finalizar =()=>{
    var nome = document.getElementById('nomeAluno').value;
    var telefone = document.getElementById('telAluno').value;
    var instrutor = document.getElementById('selectInstrutores').value;
    var perguntaFinalTextArea = document.getElementById("final").value;

    dadosUsuario = {
        nome: nome,
        telefone: telefone,
        instrutor: instrutor
    };
    //coleta dados do array da pesquisa
    dadosEscalaKeller=respostas;
    console.log(dadosUsuario)
    console.log(dadosEscalaKeller)
    console.log(perguntaFinalTextArea)
    
   var nomeAlunoOBG= document.getElementById("nomeAlunoOBG");
   nomeAlunoOBG.textContent=dadosUsuario.nome;
   let  etapa4 = document.querySelector(".etapa-4");
   let etapa5= document.querySelector(".etapa-5");
   etapa4.classList.toggle("remove");
   etapa5.classList.toggle("remove");

   sendData(dadosUsuario,dadosEscalaKeller,perguntaFinalTextArea);


}



