
function conjugarVerbo() {

    //Variáveis
    var verbo = document.getElementById("verbo").value;
    var radical = verbo.substr(0,verbo.length-2);
    var conjugacao = verbo.substr(verbo.length-2);
    var pessoa = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];

    switch(conjugacao) {
        
        case "ar" :
            var terminacao = ['o', 'as', 'a', 'amos', 'ais', 'am'];
            break;
        
        case "er" :
            var terminacao = ['o', 'es', 'e', 'emos', 'eis', 'em'];
            break;    

        case "ir" :
            var terminacao = ['o', 'es', 'e', 'imos', 'is', 'em'];
            break;
        default:
            conjugacao = 0;

    }

    var linha = "";

    if(conjugacao !=0) {

        for(i=0; i<=5; i++) {
            linha += pessoa[i] +  " " + radical + terminacao[i] + "<br>";
        }  

    } else {
        linha = "Não é um verbo válido!";
    }

    document.getElementById("folha").innerHTML = linha

}

