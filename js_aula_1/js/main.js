function clicou(){

   //window.document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
   window.document.getElementById("redirecionar").innerHTML = "Obrigado por clicar";
    //alert("Obrigado por clicar");
}
function redirecionar(){
    //window.open("https://globallab.org/en/#.YBnQ2uhKiUk");
    window.location.href = "https://globallab.org/en/#.YBnQ2uhKiUk";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1+n2;
}

alert(soma(8, 15));


var nome = "Márcio de Jesus";
var idade = 37
alert(nome+" tem "+idade+" anos");
*/