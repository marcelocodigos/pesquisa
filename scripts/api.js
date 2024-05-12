let instrutoresPerguntas = {
    instrutores: [],
    perguntas: [],
    unidades:[]
  };
  var url ="https://script.google.com/macros/s/AKfycbxWquIlOZCxR1_AqbPNZgemrD60SrsuLBpKAG6xn8RFms31LmcEr8A8o0xCN4tM60za/exec";
  
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
          acao: pergunta.acao,
          tipo:pergunta.tipo
        }));

         // Preencher array de undiades no objeto instrutoresPerguntas
         instrutoresPerguntas.unidades = data.unidades.map(unidades => ({
          nomeUnidade: unidades.nomeUnidade,
          situacaoUnidade: unidades.situacaoUnidade
          
        }));
  
        console.log(instrutoresPerguntas);
        popularSelectInstrutores()
        popularSelectUnidades()
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
  //popular select listando as unidades do objeto principal "instrutoresPerguntas"
  popularSelectUnidades=()=>{
    const selectUnidades = document.getElementById("selectUnidades");
    selectUnidades.innerHTML = "";

    for (let i = 0; i < instrutoresPerguntas.unidades.length; i++) {
      if (instrutoresPerguntas.unidades[i].situacaoUnidade === 'ativo') {
        const nomeUnidade = instrutoresPerguntas.unidades[i].nomeUnidade;
        const option = document.createElement("option");
        option.value = nomeUnidade; // valor da opção é o nome do instrutor
        option.text = nomeUnidade;  // texto visível na opção é também o nome do instrutor
        selectUnidades.appendChild(option);
      }
    }
  }


