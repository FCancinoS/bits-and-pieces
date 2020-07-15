
$("#ButtonPost").on("click",TodoPost)
$("#ButtonClear").on("click",TodoClear);
$("#ButtonMark").on("click",TodoMark);
$("#ButtonDelete").on("click",TodoDel);

function TodoPost(e){
e.preventDefault();
// Necesito obtener el valor de la caja
//var todo = document.getElementById("todoText").value;
var todo = $('#todoText').val();
var list = $('#todoList').get(0);
//var list = document.getElementById("todoList");

//let currentListHTML = list.innerHTML;
let currentListHTML = $('#todoList').html();
$('#todoList').html(currentListHTML + '<input type = "checkbox" name="todo" /> ' + todo + '<br>');
//list.innerHTML = currentListHTML + '<input type = "checkbox" name="todo" /> ' + todo + '<br>';



}
function TodoClear(e){
    e.preventDefault();

    var todos = $("[name='todo']");
    //var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = false;
    }
}
function TodoMark(e){
    e.preventDefault();
    //var todos = document.getElementsByName("todo");
    var todos = $("[name='todo']");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = true;
    }
}
function TodoDel(e){
    e.preventDefault();
    $('#todoList').text("");
    //var list = document.getElementById("todoList");
    //list.text() = "";
}