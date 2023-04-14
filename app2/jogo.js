var altura = 0
var largura = 0
/*essas variáveis precisam ser criadas fora do escopo da função
para que assim seja possível redefinir o valor das mesmas*/

function ajustaTamanhoPalcoJogo() {
    var altura = innerHeight
    var largura = innerWidth

    console.log(altura, largura)
/*encapsulamento feito pois é necessário que essas informações de altura e largura
estejam sempre atualizadas quando houver o ato de redimensionamento*/ 
}

ajustaTamanhoPalcoJogo()
//exibir/chamar função