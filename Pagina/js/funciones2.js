var biblioteca = new Array();

function GuardarLibro(){

	var libro = new Object();
	libro.id  = document.getElementById('txtID').value;
	libro.titulo  = document.getElementById('txtTitulo').value;
	libro.nombre  = document.getElementById('txtNombre').value;
	libro.apellido  = document.getElementById('txtApellido').value;
	libro.categoria  = document.getElementById('txtCategoria').value;
	libro.precio  = document.getElementById('txtPrecio').value;


	if(libro.id.length==0 || libro.titulo.length==0 || libro.nombre.length==0 || libro.apellido.length==0 || libro.categoria.length==0 || libro.precio.length==0){
		alert("Complete todos los campos");
		return;
	}

	biblioteca.push(libro);
	MostrarLibros();
}

function MostrarLibros(){

	grid="";
    for (var dato in biblioteca){

		grid+="<div class='col-6'>";
			grid+="<b>ID:</b> "+biblioteca[dato].id+"<br>";
			grid+="<b>Titulo:</b> "+biblioteca[dato].titulo+"<br>";
		    grid+="<b>Nombre del autor:</b> "+biblioteca[dato].nombre+"<br>";
		    grid+="<b>Apellido del autor:</b> "+biblioteca[dato].apellido+"<br>";
		    grid+="<b>Categoria:</b> "+biblioteca[dato].categoria+"<br>";
		    grid+="<b>Precio:</b> $"+biblioteca[dato].precio+"<br>";
		grid+="</div>";
    }
    document.getElementById('libro').innerHTML=grid;
}