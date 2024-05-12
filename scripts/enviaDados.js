   sendData=(dadosUser,DadosKeller,respFinal,dataAtual,recepcao)=>{
      respostaFinalFormatada = respFinal.trim(/\s+/g, '');
     //calcula a media das notas do array perguntas
      let somaMedia=(
        Number(dadosEscalaKeller[0])+
        Number(dadosEscalaKeller[1])+
        Number(dadosEscalaKeller[2])+
        Number(dadosEscalaKeller[3])+
        Number(dadosEscalaKeller[4]))
        let resultadoMedia=somaMedia/dadosEscalaKeller.length
      
      const data = {
        NomeInstrutor:dadosUser.instrutor,
        NomeAluno: dadosUser.nome,
        Telefone: dadosUser.telefone,
        Unidade:dadosUser.unidade,
        Paciencia:DadosKeller[0],
        Didatica: DadosKeller[1],
        Respeito: DadosKeller[2],
        Relacionamento_Interpessoal:DadosKeller[3],
        Comunicacao: DadosKeller[4],
        Recomendacao:respostaFinalFormatada,
        Avaliacao_Recepcao:recepcao,  
        Media:resultadoMedia,
        Data_Atual:dataAtual
        
       
    };
    
    
    
      
    
      
      // Add one line to the sheet
      fetch("https://sheet.best/api/sheets/158f742e-1a27-40bd-ba8e-83eb9cbacb4c/tabs/Relatorio", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((data) => {
          // The response comes here
          
        })
        .catch((error) => {
          // Errors are reported there
          console.log(error);
        });

    }