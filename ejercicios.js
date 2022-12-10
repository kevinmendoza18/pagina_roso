function eje7(){
    var numero = parseInt(document.getElementById("cj1").value);
    var por = parseInt(document.getElementById("cj2").value);
    var resultado = numero-(por/100)*numero;
    document.getElementById("ejercicio7").innerHTML = "el numero disminuido es " + resultado;
    
}

function eje13(){
    var celcius = parseInt(document.getElementById("cj1").value);
    var farenheit = celcius * 1.8000 + 32.00;
    document.getElementById("ejercicio13").innerHTML = "Los grados celcius pasados a farenheit son  " + farenheit;

}

function eje16(){
    var hombres = parseInt(document.getElementById("cj1").value);
    var mujeres = parseInt(document.getElementById("cj2").value);
    var total = hombres + mujeres;
    var porH = (hombres/total)*100;
    var porM = (mujeres/total)*100;
    document.getElementById("eje16").innerHTML = "El porcentaje de hombres es " + porH + "%" + " El porcentaje de mujeres es " + porM + "%";

}

function eje30(){
    document.getElementById('eje30').innerHTML="";
    var n= parseInt(document.getElementById('cj1').value);
    
    for (i=1; i <= 10; i++){
        document.getElementById('eje30').innerHTML  +=n + "x" + i + "=" + n*i +"<br>" ;
    }
}

function eje35(){
    var pesoTotal = 0;
    var peso;
    for(i=1; i<=10; i++){
        peso=parseInt( prompt("ingrese el peso" + i));
        pesoTotal += peso
    }
    document.getElementById("eje35").innerHTML="El peso total es "+pesoTotal
}

function eje37() {
    var edades;
    var sumMayores = 0;
    var sumMenores = 0;
    for (i = 1; i <= 10; i++) {
        edades = parseInt(prompt("ingresa las edades" + i));
        if (edades >= 18) {
            sumMayores++
        } else {
            sumMenores++
        }
    }
    pmay = sumMayores * 10;
    pmen = sumMenores * 10;

    document.getElementById("eje37").innerHTML = "El porcentaje de  mayores de edad es "+pmay+ "% Y el porcentaje de los menores es " + pmen+ "%";

}


