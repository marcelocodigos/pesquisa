document.getElementById("etapa-1").addEventListener("click",function(){
 
     //mostra a etapa 2 e esconde a etapa1
     const etapa2 = document.querySelector(".etapa-2");
     const etapa1 = document.querySelector(".etapa-1")
     etapa2.classList.toggle("remove");
     etapa1.classList.toggle("remove");

     // Certifique-se de que o script é executado após ter os dados disponíveis
// Certifique-se de que o elemento com ID "selectInstrutores" existe na sua página HTML

const selectInstrutor = document.getElementById("selectInstrutores");
selectInstrutor.innerHTML = "";

for (let i = 0; i < instrutoresPerguntas.instrutores.length; i++) {
  if (instrutoresPerguntas.instrutores[i].acao === 'Ativo') {
    const nome = instrutoresPerguntas.instrutores[i].nome;
    const option = document.createElement("option");
    option.value = nome; // valor da opção é o nome do instrutor
    option.text = nome;  // texto visível na opção é também o nome do instrutor
    selectInstrutor.appendChild(option);
  }
}


   
    
});


// Certifique-se de que o script é executado após ter os dados disponíveis
// Certifique-se de que o elemento com ID "selectInstrutores" existe na sua página HTML

