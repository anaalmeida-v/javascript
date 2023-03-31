alert('Olá, seja bem vindo ao curso!')
document.getElementById('nome').value = 'Oi'

/***VARIÁVEIS****/

//string
var texto = 'Curso de JavaScript'

//number
var numeroInteiro = -7
var numeroFracionado = 10.75

//boolean
var teste = true  //true --> verdadeiro / false --> falso

//alert(numeroFracionado) //abrir um dialog
//document.write(texto) //o nome de variável adicionado será exibido no browser
//console.log(numero.Inteiro) //valor da variavel aparecerá no console(bom para strings mais complexas)
//***********() - texto, numeroInteiro, numeroFracionado, teste

//null
var teste = null

//undefined
var teste2 = undefined
var teste2
//se não for atribuído valor nenhum, a variável será automaticamente undefined

console.log(teste)

teste = 'Valor modificado com sucesso'

console.log(teste)

teste = 25

console.log(teste)



/***********CONCATENAÇÃO**********/
var nome = prompt('Digite o seu nome: ')
var idade = prompt('Digite sua idade: ')
var idade2 = 50

console.log(idade)
console.log(idade2)

document.write('<h1>Olá ' + nome + ', tudo bem? estou vendo aqui que você possui ' + idade + ' anos.</h1>')


/***DESAFIO ABC***/

var a = 10
var b = 20
var c = null
document.write('A: ' + a + '<br />')
document.write('B: ' + b + '<br />')
document.write('C: ' + c + '<br />')

document.write('<hr />')

c = a //c temporiariamente armazena o valor de a
a = b //valor da variável a é o mesmo de b
b = c //b obtem o valor atual de c que é o valor da variável a

c = null //removendo valor da variável c

document.write('A: ' + a + '<br />')
document.write('B: ' + b + '<br />')
document.write('C: ' + c + '<br />')


/*******IFESLSE - OPERADORES CONDICIONAIS*****/

var media = 7
var nota = prompt('Digite a nota do aluno: ')

if (nota >= media) {
    document.write('Aprovado')
} else {
    document.write('Reprovado')
}

/******IFELSE - OPERADORES LÓGICOS****/
/* -- > operador lógico '&&' - e 
 
-- > quando ultilizado o operador lógico '&&', no caso de mais de uma operação, 
só será true, quando todas as operações forem verdadeiras
 
-- > true && true && false = false
 

if(2 == 2 && 3 >=1 && 'a' == 'b') {
    document.write('Verdadeiro')
}
else{
    document.write('Falso')
}

document.write('<hr />')
/* -- > operador lógico '||' - ou 

-- > se um resultado for true, a expressão inteira é verdadeira
     caso todos forem false, a expressão resulta em falso

-- > true || true || false = true 
 

if(2 == 2 || 3 >= 1 || 'a' == 'b'){
    document.write('Verdadeiro')
}else{
    document.write('Falso')
}

document.write('<hr />')
/* -- > operador lógico '!' - negação

-- > nesse caso, o resultado seria true, porém o operador 
de negação reverte a expressão

-- > false = false
 

if(!(5 >= 2)){
    document.write('Verdadeiro')
}else{
    document.write('Falso')
}*/

var nota = prompt('Digite a nota do aluno: ')
var faltas = prompt('Digite a quantidade de faltas: ')

var media = 7
var faltas_maximas = 15


/*if(nota>=media && faltas <= faltas_maximas){
    document.write('Aprovado')
    //lógica
}else{
    document.write('Reprovado')
}*/

/* operador ternário
 
    sintaxe:
    var <variavel> = ? <condicao> ? <verdadeiro> : <falso>
*/

var resultado = nota >= media && faltas <= faltas_maximas ? 'Aprovado' : 'Reprovado'
document.write(resultado)


/*****CASTING*****/
var variavel1 = 10
var variavel2 = 20

//variavel1 = parseInt(variavel1)
//variavel2 = parseInt(variavel2)

document.write(variavel1.toString() + variavel2.toString())


/********EXERCICIO FIXAÇÃO*********/
var idade = prompt('Digite sua idade')

if (idade >= 0 && idade < 15) {
    document.write('Criança')
}

if (idade >= 15 && idade < 30) {
    document.write('Jovem')
}

if (idade >= 30 && idade < 60) {
    document.write('Adulto')
}

if (idade >= 60) {
    document.write('Idoso')
}

/*
--- > document.write('') e alert('') darão o mesmo resultado na hora da resposta

--- > Pode-se usar o if encadeado, e assim terá o mesmo resultado
 
var idade = prompt('Digite a idade');
    if(idade >= 0 && idade < 15){
    alert('Criança');

    } else if(idade >= 15 && idade < 30){
    alert('Jovem');

    } else if(idade >= 30 && idade < 60){
    alert('Adulto');

    } else {
    alert('Idoso');
    }
*/

/****SWITCH*****/

var parametro = '2'

switch (parametro) { /*pode haver uma modificação de tipo da variavel(parseInt/parseFloat/toString)*/
    case 1:
        document.write('Parametro 1')
        break

    case '2':
        document.write('Parametro 2')
        break

    default:
        document.write('Default')
}



/**********************explicação do método:*/
var opcao = 2
switch (opcao) { //opcao  -->variavel ou valor pré-definido

    case 1:/* -- > função - comparar o valor encaminhado com o switch com o valor do case
             -- > comparação feita utilizando o operador idêntico*/
        //trecho de código que será executado
        break

    case 2:
        //trecho de código que será executado
        break

    default:
        //trecho de código que será executado
        break
}/* -->nesse exemplo, o case que será disparado, será o 'case 2', por conta da comparação que será feita com a variável(nesse caso)'opcao'
*/


/********OPERADORES ARITMÉTICOS**********/
/*  ----------OPERADORES ARITMÉTICOS - PRÁTICA-------------------
        var num1 = prompt('Digite o valor de num1')
        var num2 = prompt('Digite o valor de num2')

        num1 = parseInt(num1)
        num2 = parseInt(num2)

        document.write('A soma entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 + num2) + '<br />')
        document.write('A subtração entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 - num2) + '<br />')
        document.write('A multiplicaçãoção entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 * num2) + '<br />')
        document.write('A divisão entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 / num2) + '<br />')
        document.write('O módulo entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 % num2) + '<br />')
        document.write('o incremento entre ' + num1 + ' é: ' + (++num1) + '<br />')
        document.write(num1 + '<br />')
        document.write('o decremento entre ' + num1 + ' é: ' + (num1--) + '<br />')
        document.write(num1 + '<br />')
        */

/*      ---------MUDANDO TIPO DA VARIAVEL DE UM MODO SIMPLES----------
         var teste = 10
        document.write(teste  + '<br />')
        //soma
        //teste = teste + 5 mesma funcao com menos codigos:
        teste += 5
        /*        document.write(teste  + '<br />')
                //subtração
                teste -= 5
                document.write(teste  + '<br />')
                //multiplicação
                teste *= 5
                document.write(teste  + '<br />')
                //divisão
                teste /= 5
                document.write(teste  + '<br />')
                teste %= 5
                document.write(teste  + '<br />')
                //pode-se utilizar com outros tipos de variáveis
        */




document.write(11 + 5 - 5 * 2 / 2)

// () - aplicar precedência

/*
    1º multiplicacao e divisão
    2º soma e subtracao
*/

/******EXERCICIO FIXACAO IMC******/
var nome = prompt('Digite o nome da pessoa: ')
var altura = prompt('Digite a altura da pessoa em cm: ')
var peso = prompt('Digite o peso da pessoa: ')

altura = parseFloat(altura)
peso = parseFloat(peso)

altura = altura / 100

var M
M = peso / (altura * altura)

var classificacao = ""

if (M < 16) {

    classificacao = 'Baixo peso muito grave'

}

else if (M >= 16 && M <= 16, 99) {

    classificacao = 'Baixo peso grave'

}

else if (M >= 17 && M <= 18, 49) {

    classificacao = 'Baixo peso'

}

else if (M >= 18, 50 && M <= 24, 99) {

    classificacao = 'Peso normal'

}

else if (M >= 25 && M <= 29, 99) {

    classificacao = 'Sobrepeso'

}

else if (M >= 30 && M <= 34, 99) {

    classificacao = 'Obesidade grau |'

}

else if (M >= 35 && M <= 39, 99) {

    classificacao = 'Obesidade grau ||'

}

else {

    classificacao = 'Obesidade grau |||'

}

document.write(nome + ' possui índice de massa corporal igual a ' + M + ', sendo classificado como: ' + classificacao)


/******FUNÇÃO*****/


//void
//retorno
/*function calcularAreaTerreno(largura,comprimento){     
    
    //lógica
    var area = largura * comprimento               

    //document.write('O terreno possui ' + area + ' metros quadrados') - exibe no browser
    return area
}

var largura = prompt('Digite a largura do terreno em metros')
var comprimento = prompt('Digite o comprimento do terreno em metros')

var area = calcularAreaTerreno(largura, comprimento)

//exibindo as funções:
//-ordem obrigatória na declaração de valores de variáveis
    document.write('O terreno possui ' + area + ' metros quadrados')
*/

function soma(a, b) {
    //b = b === undefined ? 0 : b //se b === 0, exibirá '0', caso o contrário, exibirá 'b'
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7, 9, 15)) // desconsidera os parâmetros adicionais
console.log(soma(7)) //'a' vale 7 e b é undefined, resultado será not a number(NaN)
console.log(soma())  //caso não haja parâmetros definidos, o valor dos números será undefined = not a number

/****escopo de variaveis*****/

//3 escopos: global, função e o bloco

var serie =  'Friends'
        
//escopo de bloco
if (true) {
    var serie2 = 'Game of Thrones'
    document.write(serie)
}

document.write(serie2)

document.write(<br />)

function x() {
    document.write(serie)
    document.write(serie2)
}

x()

/*****funções anonimas****/

var exibirSaudacao = function(nome)  {
    document.write('Olá ' + nome + ', tudo bem?')
}

exibirSaudacao('Jorge')
/*função anônima - como o próprio nome diz, função sem nome

sintaxe e funcionamento idênticos a de uma função comum.

única diferença é a ausência do nome*/

/*****funcoes string****/


var nome = 'Jorge Sant Ana'

//propriedade length - retorna quantidade de caracteres de uma string
document.write('Jorge Sant Ana'.length())
/*charAt() - retorna um caractere com base na sua posição dentro da cadeia de caracteres(é encaminhado um determinado índice,
e o charAt retorna o número contido naquele índice)*/
document.write('Jorge Sant Ana'.charAt(7))
/*indexOf() - retorna posição da primeira ocorrência de um valor específico dentro da string*/
document.write(nome.indexOf(12))
//replace() - permite com base em um valor de pesquisa e em um outro valor de modificação substituir textos dentro de uma string
document.write(nome.replace('Sant Ana', 'Silva'))
/*substr - permite extrair parte de uma string com base em uma posição inicial
seguida de um valor que representa a quantidade de caracteres a frente daquela posição inicial
é como se ele recortasse aquela string*/
document.write(nome.substr(6, 4))//nesse exemplo, a partir do caractere 6 será recuperado quatro caracteres a frente, e o 6 também
//toLowerCase - converter todos os caracteres de um string para a caixa baixa(caracteres mínusculos)
document.write(nome.toLowerCase())
//to UpperCase - converte caracteres para caixa alta(caracteres maiúsculos)
document.write(nome.toUpperCase())//essees dois podem ajudar na formatação ou armazenamento de textos.
//trim - remove os espaços em branco das extremidades de uma string
document.write('-' + nome.trim() + '-')