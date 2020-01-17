$(document).ready(function(){
  var fabrica = {
    "nombre" : "TomilloF5",
    "ciudad" : "Madrid",
    "numCoders" : 24,
    "coders" : [
      {"nombre" : "Gema",
        "edad" : 25},
      {"nombre" : "Belén",
      "edad": 20},
      {"nombre" : "Santiago",
      "edad" : 20}
    ]
  }
  
  $("#fabrica").html(fabrica.nombre);

  $.each(fabrica.coders, 
    function(indice, valor){
      $("#codersTable").append(
        "<tr> <td>" + valor.nombre +
        "</td> <td>" + valor.edad +
        "</td></tr>"
        );
    });

});
