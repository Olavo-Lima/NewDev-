var saidaSaldo = document.getElementById("saldo");
var saidaExtrato = document.getElementById("extato");
var valorHTML = document.getElementById("valor");


var poupanca = {
    saldo: 0,
    movimentacao: [],

    depositar: function() {
        this.saldo += Number(valorHTML.value);
        saidaSaldo.innerHTML = this.saldo; 
    },
    sacar: function() {
        
    },
    exibirExtrato: function() {
       
    }
    
}