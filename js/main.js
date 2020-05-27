function botao() {
    document.getElementById("teste").innerHTML = "teste";
}

function redirecionar() {
    window.open("https:\\www.google.com"); //abrir em uma nova aba
    //window.location.href = "https:\\www.google.com"; //abrir na mesma aba
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "trocar texto";
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function trocar2(element) {
    element.innerHTML = "trocar texto";
}

function voltar2(element) {
    element.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Pagina carregada");
}

function funcaochange(element) {
    console.log(element.value);
}

/*
var frase = "Viva a revolução";
console.log(frase.replace("Viva", "Morte")); //pode ser usado tbm no alert
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

var lista = ["papai", "mamãe", "filho"];
console.log(lista);
console.log(lista[1]);
lista.push("filha"); //inserir item no final da lista
console.log(lista);
lista.pop(); //remove item no final da lista
console.log(lista);
console.log(lista.length); //tamanho da lista
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var carro = {marca:"gol", cor:"prata"};
console.log(carro);
console.log(carro.cor);
var carros = [{marca:"gol", cor:"prata"}, {marca:"fiat", cor:"cinza"}];
console.log(carros);
console.log(carros[1].marca);

var idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    console.log("Pode beber");
}else{
    console.log("Fique só no refrigerante!");
};

var count = 0;
while (count < 5){
    console.log(count);
    count++;
};

for(count=0; count<=5; count++){
    console.log(count);
};

var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getDay());
console.log(d.getSeconds());

function soma (n1, n2){
    return n1 + n2;
}
console.log(soma(3, 5));

function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"));
*/