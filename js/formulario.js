function enviarDados(){

    var nameValue = document.querySelector("#js-name").value;
    var emailValue = document.querySelector("#js-email").value;
    var nascimentoValue = document.querySelector("#js-nascimento").value;
    var matriculaValue = document.querySelector("#js-matricula").value;
    var serieValue = document.querySelector("#js-serie").value;
    var estudouValue = document.querySelector("#js-estudou").value;

    var aluno = {
        
        "name": nameValue,
        "email": emailValue,
        "nascimento": nascimentoValue,
        "matricula": matriculaValue,
        "serie": serieValue,
        "estudou": estudouValue,

    };

    localStorage.setItem("dadosAluno", JSON.stringify(aluno));

   
    var retrievedObject = localStorage.getItem("dadosAluno");

    console.log(retrievedObject);

}
