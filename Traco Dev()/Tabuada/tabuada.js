var n = prompt("Digite um numero");
var i;

document.getElementById("tabuada").innerHTML = "Tabuada do " + n + "<br><br>"; 

for (i=1; i<=10; i++) {

    document.getElementById("tabuada").innerHTML += n + " " + " " + "x" + " " + i + " " + "=" + " " + n*i + "<br>";    

}