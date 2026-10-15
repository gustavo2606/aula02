// string = textos
// boolean = verdadeiro/false
// float = numeros quebrados
// int = numeros inteiros

//variaveis 
var idadeUsuario = 20

//exibe mensagem na tela
// o simbolo "+" quando usado com textos, ele concatena, ou seja, junta as duas coisas
console.log("idade do usuario:" + idadeUsuario)
// = é operador de atribuição, ele atribui o valor a variavel
// == é o operador de comparação igual, ele compara se os dois valores são iguais e retorna true ou false
// > é operador de maior
// < é operador de menor
// >= é operador de maior ou igual
// <= é operador de menor ou igual
console.log(idadeUsuario == 18)
// ao ter a comparação, o resultado é booleano, ou seja, verdadeiro ou falso

// if condição se
//if dentro de if gera uma segunda validação
// else condição senão
if (idadeUsuario >= 20) {
    console.log("O usuario pode dirigir!")
}else {
    console.log("O usuario nao pode dirigir!")
}

