function crear_matriz(){

	var fila = document.getElementById('txtFilas').value;
	var columna = document.getElementById('txtColumnas').value;
	var ArregloNumeros = new Array();
	var filaN = new Array();

	if(fila.length==0 || columna.length==0){

		alert("Completa los campos");
		return;
	}
	
	for (i=0; i<fila; i++){

		for (j=0; j<columna; j++){

			filaN.push(Math.floor(Math.random() * (999 - -999) + -999 ));
		}
		ArregloNumeros.push(filaN);
		var filaN = new Array();
	}

	mostrarMatriz(ArregloNumeros,columna);
}

function mostrarMatriz(matriz, col){

	var matriz;
	var col;
	var numeromenor = matriz[0][0];
	var numeromayor = matriz[0][0];

	tabla="";
	for (i=0; i<matriz.length; i++){
		tabla+="<tr>";
		for (j=0; j<col; j++){

			if(numeromenor>matriz[i][j]){
				numeromenor=matriz[i][j];
			}

			if(numeromayor<matriz[i][j]){
				numeromayor=matriz[i][j];
			}

			tabla+="<td>"+matriz[i][j]+"</td>";
		}

		tabla+="</tr>";
	}
	
	document.getElementById("tableBody").innerHTML=tabla;
	document.getElementById("numeros").innerHTML="<b>Numero mayor:</b> "+numeromayor+" <br><b>Numero menor:</b> "+numeromenor;
}