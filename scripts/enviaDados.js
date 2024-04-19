  const sendData=(dadosUser,DadosKeller,respFinal)=>{
      repsotaFinnalFormatada = respFinal.trim(/\s+/g, '');
      
      const data = {
        NomeInstrutor:dadosUser.instrutor,
        NomeAluno: dadosUser.nome,
        Telefone: dadosUser.telefone,
        Paciencia:DadosKeller[0],
        Didatica: DadosKeller[1],
        Respeito: DadosKeller[2],
        Relacionamento_Interpessoal:DadosKeller[3],
        Comunicacao: DadosKeller[4],
        Recomendacao:repsotaFinnalFormatada,
       
        
       
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