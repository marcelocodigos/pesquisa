document.getElementById("etapa-1").addEventListener("click",function(){
 
     //mostra a etapa 2 e esconde a etapa1
     const etapa2 = document.querySelector(".etapa-2");
     const etapa1 = document.querySelector(".etapa-1")
     etapa2.classList.toggle("remove");
     etapa1.classList.toggle("remove");
// Certifique-se de que o script é executado após ter os dados disponíveis
// Certifique-se de que o elemento com ID "selectInstrutores" existe na sua página HTML

   
    
});


continuarEtapa2=()=>{
    const etapa2 = document.querySelector(".etapa-2");
    etapa2.classList.toggle("remove");
    const etapa3 = document.querySelector(".etapa-3");
    etapa3.classList.toggle("remove");
}
