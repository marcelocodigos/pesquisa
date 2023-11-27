let instrutoresPerguntas = {
    instrutores: [],
    perguntas: []
  };
  var url ="https://script.google.com/macros/s/AKfycbwl6MFYUQKY4eE94DbPrv1aKBwnqdmJ_5FgmKKcGl3JOZSMgcr4dl68EZLCAYTp4kMV/exec";
  
  function fetchData() {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const instrutores = data.instrutores.filter(instrutor => instrutor.acao === "Ativo");
  
        // Preencher array de instrutores no objeto instrutoresPerguntas
        instrutoresPerguntas.instrutores = instrutores.map(instrutor => ({
          nome: instrutor.nome,
          acao: instrutor.acao
        }));
  
        // Preencher array de perguntas no objeto instrutoresPerguntas
        instrutoresPerguntas.perguntas = data.perguntas.map(pergunta => ({
          tema: pergunta.tema,
          pergunta: pergunta.pergunta,
          acao: pergunta.acao
        }));
  
        console.log(instrutoresPerguntas);
        popularSelectInstrutores()
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error.message);
      });
  }
  
  // Chamar a função para buscar os dados e preencher o objeto
  fetchData();
  
// Função para popular o select com instrutores ativos
function popularSelectInstrutores() {
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
  }


