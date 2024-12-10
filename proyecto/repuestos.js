var cont=0;
var  total =0;
var seleccionados=[];

function seleccionar(id_fila){
    console.log(id_fila)
    let i = seleccionados.indexOf(id_fila)
    console.log(i)
    console.log(id_fila)
    if ($("#"+id_fila).hasClass("seleccionada")){
        $("#"+id_fila).removeClass("seleccionada");
        seleccionados.splice(i,1)
    }
    else{
        $("#"+id_fila).addClass("seleccionada");
        seleccionados.push(id_fila)
    }
}
function eliminar(id_filas){
    for(let i = 0; i < id_filas.length; i++){
        $("#"+id_filas[i]).remove()
    }
}
function agregar(nombre, precio){
    cont++
    console.log(cont)
    $("#contador").text(cont);
    var fila='<tr id="fila'+cont+'" class="selected" onclick="seleccionar(this.id)">'+
    '<td>'+cont+'</td>'+
    '<td>'+nombre+'</td>'+
    '<td>'+precio+'</td></tr>'
    $("#tabla tbody").append(fila);
    total+=precio
    $("#total").text(total);
}
$("#btnprod1").click(function () { 
    let nombre = $("#nombre").text();
    let precio =$("#precio").text();
    console.log("has hecho click al boton")
    console.log(nombre, precio)
    agregar(nombre,precio)
    total = Math.round(total * 100)/100;
});

$("#btnag1").click(function (e) { 
    let nombre1 = $("#nombre1").text();
    let precio1 =$("#precio1").text();
    console.log("has hecho click al boton")
    console.log(nombre1, precio1)
    agregar(nombre1,precio1)
});
$("#btnag2").click(function (e) { 
    let nombre2 = $("#nombre2").text();
    let precio2 =$("#precio2").text();
    console.log("has hecho click al boton")
    console.log(nombre2, precio2)
    agregar(nombre2,precio2)
});
$("#btn4").click(function (e) { 
    let nombre3 = $("#nombre3").text();
    let precio3 =$("#precio3").text();
    console.log("has hecho click al boton")
    console.log(nombre3, precio3)
    agregar(nombre3,precio3)
});
$("#btn5").click(function (e) { 
    let nombre5 = $("#nombre5").text();
    let precio5 =$("#precio5").text();
    console.log("has hecho click al boton")
    console.log(nombre5, precio5)
    agregar(nombre5,precio5)
});
$("#btn6").click(function (e) { 
    let nombre6 = $("#nombre6").text();
    let precio6 =$("#precio6").text();
    console.log("has hecho click al boton")
    console.log(nombre6, precio6)
    agregar(nombre6,precio6)
});
$("#btn7").click(function (e) { 
    let nombre7 = $("#nombre7").text();
    let precio7 =$("#precio7").text();
    console.log("has hecho click al boton")
    console.log(nombre7, precio7)
    agregar(nombre7,precio7)
});
$("#btn8").click(function (e) { 
    let nombre8 = $("#nombre8").text();
    let precio8 =$("#precio8").text();
    console.log("has hecho click al boton")
    console.log(nombre8, precio8)
    agregar(nombre8,precio8)
});
$("#btn9").click(function (e) { 
    let nombre9 = $("#nombre9").text();
    let precio9 =$("#precio9").text();
    console.log("has hecho click al boton")
    console.log(nombre9, precio9)
    agregar(nombre9,precio9)
});
$("#btn10").click(function (e) { 
    let nombre10= $("#nombre10").text();
    let precio10 =$("#precio10").text();
    console.log("has hecho click al boton")
    console.log(nombre10, precio10)
    agregar(nombre10,precio10)
});
$("#btn11").click(function (e) { 
    let nombre11= $("#nombre11").text();
    let precio11 =$("#precio11").text();
    console.log("has hecho click al boton")
    console.log(nombre11, precio11)
    agregar(nombre11,precio11)
});
$("#btn12").click(function (e) { 
    let nombre12= $("#nombre12").text();
    let precio12 =$("#precio12").text();
    console.log("has hecho click al boton")
    console.log(nombre12, precio12)
    agregar(nombre12,precio12)
});
$("#btn13").click(function (e) { 
    let nombre13= $("#nombre13").text();
    let precio13 =$("#precio13").text();
    console.log("has hecho click al boton")
    console.log(nombre13, precio13)
    agregar(nombre12,precio12)
});

$("#btn14").click(function (e) { 
    let nombre14= $("#nombre14").text();
    let precio14 =$("#precio14").text();
    console.log("has hecho click al boton")
    console.log(nombre14, precio14)
    agregar(nombre14,precio14)
});

$("#btn15").click(function (e) { 
    let nombre15= $("#nombre15").text();
    let precio15 =$("#precio15").text();
    console.log("has hecho click al boton")
    console.log(nombre15, precio15)
    agregar(nombre15,precio15)
});

$("#btn16").click(function (e) { 
    let nombre16= $("#nombre16").text();
    let precio16 =$("#precio16").text();
    console.log("has hecho click al boton")
    console.log(nombre16, precio16)
    agregar(nombre16,precio16)
});

$("#btn17").click(function (e) { 
    let nombre17= $("#nombre17").text();
    let precio17 =$("#precio17").text();
    console.log("has hecho click al boton")
    console.log(nombre17, precio17)
    agregar(nombre17,precio17)
});

$("#btn18").click(function (e) { 
    let nombre18= $("#nombre18").text();
    let precio18 =$("#precio18").text();
    console.log("has hecho click al boton")
    console.log(nombre18, precio18)
    agregar(nombre18,precio18)
});
$("#btn19").click(function (e) { 
    let nombre19= $("#nombre19").text();
    let precio19=$("#precio19").text();
    console.log("has hecho click al boton")
    console.log(nombre19, precio19)
    agregar(nombre19,precio19)
});
$("#btn20").click(function (e) { 
    let nombre20= $("#nombre20").text();
    let precio20=$("#precio20").text();
    console.log("has hecho click al boton")
    console.log(nombre20, precio20)
    agregar(nombre20,precio20)
});

$("#btndel").click(function () { 
    eliminar(seleccionados)
});