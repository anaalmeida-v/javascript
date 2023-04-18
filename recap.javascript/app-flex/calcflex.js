/*
    JS - Aula5: Calculadora FLEX
    @author Professor José de Assis
*/

var etanol, gasolina
//quando variável é declarada fora do escopo da função, significa que a mesma é uma variável global

function calcular() {
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",", "."))/*replace() - troca um caractere por outro,
    nesse exemplo, troca-se "," po "." para q se o usuário colocar ',' seja possível calcular da mesma forma*/
    //convertendo valor de txtEtanol, dentro de frmFlex para parseFloat, o value resgata esse valor
    //float- tipo númerico que aceita casas decimais
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."))
    if (etanol < 0.7 * gasolina) { //se o valor do etanol custar até 70% do valor da gasolina
        document.getElementById('status').src="imagens/etanol.png"
        //no documento obtenha id status
        //status esta vinculado com a imagem, ent nela que será feita a ação
    } else {
        document.getElementById('status') .src="imagens/gasolina.png"
    }
}

function resetar() {
    document.getElementById("status") .src="imagens/neutro.png"
}
