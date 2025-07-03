//Mapeamos los botones
$("#firstbutton").click(adder);
$("#button").click(adder);//se le asigna la funcion adder al boton principal
$("div").on("click",".revisado", checker) //se le asigna la funcion de listo a su respectivo boton

$("div").on("click",".borrar", deleter);//se le asigna la funcion de borrar a su respectivo boton


//funciones para añadir articulo
function adder(e){
    e.preventDefault();
    var lista = $("ul");
    var nuevaEntrada = $("input").val();

    if(nuevaEntrada===""){
        alert("Texto vacio")
    }
    else{
        var nuevoArticulo = $('<li><div class="mini"> <button class="revisado"><i class="fas fa-check"></i></button> <p>'+ nuevaEntrada +'</p>  <button class="borrar"><i class="fas fa-ban"></i></button> </div> </li>');
        lista.append(nuevoArticulo);

    }
}
//funcion para checar articulo
function checker(e){
    e.preventDefault();
    var padre = $(this).parent();
    padre.parent().toggleClass("ready");
}

//funcion para borrar articulo
function deleter(e){
    e.preventDefault();
    var padre = $(this).parent();
    padre.parent().remove();
}
