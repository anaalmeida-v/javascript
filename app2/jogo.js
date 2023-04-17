var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
/*essas variáveis precisam ser criadas fora do escopo da função
para que assim seja possível redefinir o valor das mesmas*/

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
    /*encapsulamento feito pois é necessário que essas informações de altura e largura
    estejam sempre atualizadas quando houver o ato de redimensionamento*/
}

ajustaTamanhoPalcoJogo()
//exibir/chamar função

//elementos criados nesse local por questões de precedência
var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //caso exista, remover o mosquito anterior
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        //.remove - remove o respectivo elemento selecionado

        //console.log('elemento selecionado foi: v + vidas')
        if (vidas > 3) {
            //game over
            window.location.href = 'fim_de_jogo.html'
        } else {
            //controlando pontos de vida
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    //Math.random():foi criado valor randômico(valor aleatório de 0 a 1)
    //Math.floor: eliminar casas decimais que nesse caso é desnecessário
    /*multiplicação por largura e altura: a partir dessa multiplicação, o
    método Math.random() irá tentar achar um valor de 0 até o valor do tamanho da tela
    ex.: largura: de 0 a 733
         altura: de 0 a 635
    */

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar elemento html- document.createElement()
    /*adicionado a uma variável, para facilitar quando for adicionar
    esse método em outro elemento do DOM*/
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    /*na var tamanhoAleatorio() há três classes relacionadas ao tamanho
    e na var ladoAleatorio() há duas classes relacionadas ao lado que o mosquito esta virado*/
    mosquito.style.left = posicaoX + 'px'
    //concatenando valor das variáveis de posições X e Y com a String 'px', para formar a cordenada em px
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
        //this - ajusta o contexto de um determinado atributo ou método
    }

    //adicionando um filho para o body
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
//função criada para que o mosquito apareça em tamanhos aleatorios

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    //valor aleatório entre 0 e 2

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}