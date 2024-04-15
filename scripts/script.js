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
    const etapa2 = document.querySelector(".etapa-2");
    etapa2.classList.toggle("remove");
    const etapa3 = document.querySelector(".etapa-3");
    etapa3.classList.toggle("remove"); 
    montaPerguntas();
   
}


    
montaPerguntas=()=>{
    
    var perguntaTEXT = document.querySelector("#perguntaAtual");
    var perguntaTEXTPaginacao = document.querySelector("#texto-pergunta-atual");
    perguntaTEXTPaginacao.textContent = `Pergunta ${perguntaAtual+1} de ${instrutoresPerguntas.perguntas.length}`;
    perguntaTEXT.textContent =`${instrutoresPerguntas.perguntas[perguntaAtual].pergunta}`;
    perguntaAtual++
    console.log(perguntaAtual)
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
    const etapa4 = document.querySelector(".etapa-4");
    etapa3.classList.toggle("remove"); 
    etapa4.classList.toggle("remove");

    var perguntaFinal = document.getElementById("perguntaAtualFinal");
    perguntaFinal.textContent =`${instrutoresPerguntas.perguntas[perguntaAtual-1].pergunta}`;
    
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
    });
  });
});

