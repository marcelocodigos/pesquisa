const data = {
    NomeInstrutor: "TESTE",
    NomeAluno: "TESTE",
    Telefone: "118902121212128922",
    Paciencia: "3",
    Didatica: "4",
    Respeito: "5",
    Relacionamento_Interpessoal:"4",
    Comunicacao: "4",
    Recomendacao: "O instrutor é legal, muito educado só não gosto da repecção",
   
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
      console.log(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });