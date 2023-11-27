document.getElementById("etapa-1").addEventListener("click",function(){
 
     //mostra a etapa 2 e esconde a etapa1
     const etapa2 = document.querySelector(".etapa-2");
     const etapa1 = document.querySelector(".etapa-1")
     etapa2.classList.toggle("remove");
     etapa1.classList.toggle("remove");
});