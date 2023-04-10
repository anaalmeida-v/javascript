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

var serie = 'Friends'

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

var exibirSaudacao = function (nome) {
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


/****funções matemáticas*******/
var x = Math.ceil(10.380)
document.write(x + '<br />')
/* Math.ceil - caso haja um valor com fração, essa função fará o arredondamento para cima
um exemplo é: 10.122, seria arredondado para 11*/

var x = Math.floor(10.380)
document.write(x + '<br />')
/*Math.floor - ao contrário da 'ceil', essa função, independente da fração, é considerada a parte inteira
no exemplo de 10.122, ele seria arredondado para 10*/

var x = Math.round(10.500)
document.write(x + '<br />')
/*Math.round - diferentemente do floor e ceil, esse método leva em consideração o peso da fração, 
ou seja, dependendo do peso, ele arredonda para baixo ou para cima. Ex
10.502 - 11
10.200 - 10
(de 5 para cima seria arredondado para 11, de 4 para baixo será arredondado para 10.)*/

var x = Math.random()
document.write(x + '<br />')
//Math.random() - atribui-se o retorno de um valor aleatório entre 0 e 1 para avariável, muito utilizado em jogos.



/**********funções datas**********/
var data = new Date()
/*-- criação de uma nova instância que nesse exemplo é o Date
-- new Date() - faz com que um novo objeto de data seja criado e atribuído a uma variável
-- a partir dessa variável, tem-se acesso a um objeto que contém todos os detalhes de data, do momento da instância desse objeto
-- essas infromações são criadas com base na data e no sistema operacional em que o browser está rodando*/

document.write(data.getDate() + '<br>')
//no método acima foi retornada a data

document.write(data.getMonth() + 1 + '<br>')
/*retorna o mês
um detalhe desse método é que ele considera os meses de 0 a 11(ou seja: janeiro-0 e dezembro-11)
adicionando uma unidade ao método, é possível fazer que seja exibido de forma padrão(como mostrado acima)*/

document.write(data.getFullYear() + '<br>')
//retorna o ano

document.write(data.getDate() + '/' + (data.getMonth() + 1 + '/' + (data.getFullYear())))
//acima foi retornado dia, mês e ano no formato de data.



/*******PRATICANDO COM DATAS*******/
/*
        document.write('Praticando com datas')
        //desafio - adicionar / remover dias
        document.write(data.toString())
        data.setDate(data.getDate() + 50)
        document.write('<hr />')
        document.write(data.toString() + '<br />' + '<br />' + '<hr />')

        //desafio - adicionar / remover meses 
        document.write(data.toString())
        data.setMonth(data.getMonth() + 1)
        document.write('<hr />')
        document.write(data.toString() + '<br />' + '<br />' + '<hr />')
        
        //desafio - adicionar / remover ano
        document.write(data.toString())
        data.setFullYear(data.getFullYear() + 1)
        document.write('<hr />')
        document.write(data.toString() + '<br />' + '<br />' + '<hr />' + '<br />'  + '<br />')*/

//15/01/2017
var data1 = new Date(2017, 0, 15)

//23/02/2017
var data2 = new Date(2017, 1, 23)

document.write(data1.toDateString())
document.write('<hr />')
document.write(data2.toDateString())

document.write('<br />' + '<br />' + '<hr />')
//conversão de data para algo que possa ser calculado
//método getTime calcula a qttd de milissegundos de 1 de jan de 1970 até a data de hoje
document.write(data1.getTime())
document.write('<br>')
document.write(data2.getTime())

document.write('<br>' + '<br>' + '<hr>')
//encontrar a quantidade de millisegundos entre data1 e data2
var millisegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(millisegundos_entre_datas)
//Math.abs() - deixa o número absoluto(inteiro) independente da conta

//1 dia tem 24 horas, 1 hora tem 60 minutos, 1 minuto tem 60 segundos e 1 segundo tem 100 milissegundos
var milissegundos_por_dia = (1 * 24 * 60 * 60 * 1000)
document.write('1 dia tem:' + milissegundos_por_dia + ' milissegundos')

//imprimir divisão da diferença de milissegundos pelos milissegundos existentes em um dia
document.write('<br>' + '<br>' + '<hr>')
document.write('A diferença entre data1 e data2 é de: ' + Math.ceil(millisegundos_entre_datas / milissegundos_por_dia) + 'dia(s)')


/*******EXERCICIO_FIXACAO3*********/
var num1 = prompt('Digite um número')
var operacao = prompt('Digite uma operação')
var num2 = prompt('Digite um segundo número')

function calculo(num1, num2, operacao) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    var resultado = 0

    if (operacao == 'soma') {
        resultado = num1 + num2
    }
    if (operacao == 'subtração') {
        resultado == num1 - num2
    }
    return resultado
}

document.write('O resultado é: ' + calculo(num1, num2, operacao2))



/*******eventos-mouse*************/
function acao() {
    alert('Evento disparado')
}

function acao1() {
    alert('Elemento foi clicado')
}

function acao2() {
    alert('O cursor do mouse deixou a região do elemento')
}

/********eventos-teclado**********/
function acao1() {
    alert('evento disparado')
}

/*******eventos-janela*******
<body onscroll="console.log('evento disparado')"> <!--onresize="document.log('evento disparado')">
    <div style="height: 3000px; width: 125px; background: #ccc;"></div>
    */

/***eventos-formulario****
<body>
    <input onfocus="console.log('recebeu foco')" onblur="console.log('perdeu foco')" type="text">

    <select onchange="console.log('Estado modificado')">
        <option>-- Selecione --</option>
        <option value="1">-- Primeira opção --</option>
        <option value="2">-- Segunda opção --</option>
    </select>
*/

/****dom getElement******/
//console.log(document.getElementById('nome_usuario'))
//console.log(document.getElementsByTagName('input'))
//console.log(document.getElementsByClassName('campo_texto'))
console.log(document.getElementsByName('nome'))


/******manipulando valores de inputs(text)*******/
//verifica  o caracter digitado, se é letra vai para o campo 'Letras' se número vai para o campo 'Números'

function distribuiCaracter() {
    //selecionar valor digitado
    var caracter = document.getElementById('entrada').value
    //limpar o campo de digitação - seleciona e deixa o campo do elemento vazio
    document.getElementById('entrada').value = ''

    //limpar espaços em branco nas extremidades da string
    caracter.trim()

    switch (caracter) {

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adicionar caracterer no campo referente a números
            document.getElementById('apenas_numeros').value += caracter
            break;
        default:
            //adicionar o caracter no campo referente a letra
            document.getElementById('apenas_letras').value += caracter
    }
}

/******manipulando estilos de elemento*******/
function modificaEstilo(corDeFundo) {

    document.getElementById('quadrado').style.background = corDeFundo
    //atribuindo corDeFundo a background no atributo style
    document.getElementById('quadrado').style.width = 1
    document.getElementById('quadrado').style.height = a
}
/********manipulando clases de elementos***********/

function modificaClasse() {
    document.getElementById('mensagem').className = 'estilo2'
}

/******exercicio para fizacao 4*******/
function inputGanhaFoco() {
    document.getElementById('bg').style.background = "yellow"
}
function inputPerdeFoco() {
    var valorInput = document.getElementById('bg').value

    if (valorInput.length < 3) {
        document.getElementById('bg').style.background = "red"
    } else {
        document.getElementById('bg').style.background = "green"
    }
}

/*********array - introdução

listas ordenadas

variáveis que nos permitem relacionar itens associados à índices

esse tipo de variável tenta imitar as listas do mundo real*********/

//com variavel
var variavel_1 = 'Banana'
var variavel_2 = 'Maçã'
var variavel_3 = 'Morango'
var variavel_4 = 'Uva'

//com um array()
var lista_frutas = Array();
lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Maçã'
lista_frutas[3] = 'Morango'
lista_frutas[4] = 'Uva'


/**ARRAY PRÁTICA****/
/* var lista_frutas = Array()
  ou*/
var lista_frutas = []
lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Maçã'
lista_frutas[3] = 'Morango'
lista_frutas[4] = 'Uva'
//pode-se mesclar indices, pode ser numérico ou string
/*
ex.: ['1'] ou [1] ou ['um']
*/

//quando o array é declarado dessas formas:
var lista_frutas = Array('Banana', 'Maçã', 'Morango', 'Uva')
var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva'] //ao invés do array foram utilizadas as chaves para indicar o tipo da declaração dos elementos
//o javascript tem a inteligência de associar um índice para cada elemento
//parte da posição 0

/************inclusão e remoção de array*/
/*var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'

//incluir elemento no final do array
lista_frutas.push('Uva')
//push = nele que inclue-se o elemento que quer no final do array

//incluir elemento no início do array
lista_frutas.unshift('Uva')

//excluir elemento do final do array
lista_frutas.pop()
//não é necessário incluir parâmetro por conta de ser um método de exclusão

//excluir elemento do início do array
lista_frutas.shift()

'<hr>'

var lista_frutes = Array()

lista_frutes['frutas'] = Array()
lista_frutes['pessoas'] = []

//lista_frutes.push('Uva')
lista_frutes['frutes'].push('Banana')*/


/******array - multidimensional**********/

var lista_coisas = Array()

lista_coisas['frutas'] = Array('Banana', 'Maçã', 'Morango', 'Uva')
lista_coisas['pessoas'] = []

/*lista_coisas['frutas'][1] = 'Banana'
lista_coisas['frutas'][2] = 'Maçã'
lista_coisas['frutas'][3] = 'Morango'
lista_coisas['frutas'][4] = 'Uva'*/

lista_coisas['pessoas']['a'] = 'João'
lista_coisas['pessoas']['b'] = 'José'
lista_coisas['pessoas']['c'] = 'Maria'

document.write(lista_coisas['frutas'][3])
document.write(lista_coisas['pessoas']['b'])
//exibindo elementos específicos do array


/*******array pesquisa***********/

var lista_frutas = []

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

var auxiliar = lista_frutas.indexOf('Banana')

if (lista_frutas.indexOf('Abacaxi') === -1) {
    console.log('Elemento não existe')
} else {
    console.log('Elemento existe e está na posição ' + auxiliar)
}

/**********array - ordenanação***********/

var lista_frutas = Array()

lista_frutas[0] = 'Maçã'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'

lista_frutas.sort()

var lista_numeros = Array()

lista_numeros[0] = 12
lista_numeros[1] = 40
lista_numeros[2] = 3
lista_numeros[3] = 7
lista_numeros[4] = 19
lista_numeros[5] = 1

console.log(lista_numeros.sort(ordenaNumeros))

function ordenaNumeros(a, b) {
    return a - b
    // < 0 = a ordenado anets de b
    // > 0 = b ordenado antes de a 
    // == a é mantida
}

/*******array - exerciciofixacao5************/
var objetos = Array('Cadeira', 'Impressora', 'Garfo')

function botaoAdicionar() {
    var objeto = document.getElementById('objeto').value
    //na linha acima o valor do ID(adicionado dentro do input) foi recuperado

    if (objeto != "") {
        //caso o campo não esteja vazio, entra no if

        if (valorInput.indexOf(objeto) !== -1) {
            /*vericidade em relação ao valor ter sido inserido anteriormente.
            se foi, exibe a mensagem a seguir*/
            alert("Objeto já foi adicionado")
        } else {
            objetos.push(objeto)
            console.log(objeto)

            document.getElementById("objeto").value = ""
        }
    } else {
        alert("Informe um objeto válido")
    }
}

function botaoOrdenar() {
    objetos.sort()
    console.log(objetos)
}
