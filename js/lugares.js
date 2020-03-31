lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
    var inputs= document.querySelectorAll('input[type="textbox"]');

    var options = {
      types: ['geocode']
    };

    var circle = new google.maps.Circle(
      { center: mapa.getCenter(), radius: 20000 });

    inputs.forEach(function(input){
      var autocomplete = new google.maps.places.Autocomplete(input, options);
      autocomplete.setBounds(circle.getBounds());

    })    
        /*
        * * qué elementos debemos seleccionar de la ui para obtener el dato que ingresa el usuario?
        * * qué tienen en común éstos elementos? como podríamos seleccionarlos a todos juntos?
        * * Si son varios, para aplicar la clase autocompletar, necesitamos recorrerlos? cómo?
        * * para cada elemento debemos crear una instancia places y utilizar la función autocompletar, 
        * * qué parámetros recibe? qué es types? qué es strictBounds? qué es circle?
        */

  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

    // ** esto  lo agregamos en la última clase
    var tipoDeLugar = document.getElementById('tipoDeLugar').value;
    var radio = document.getElementById('radio').value;

    var request = {
      location: posicion,
      radius: radio,
      type: [tipoDeLugar]
    };

    servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);
  }
  return {
    inicializar,
    buscarCerca
  }
})()
