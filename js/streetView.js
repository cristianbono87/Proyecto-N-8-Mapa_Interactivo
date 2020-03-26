streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

  function inicializar () {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */
    /*
    * * Debemos inicializar un nuevo  panorama creando una instancia de streetViewPanorama
    * * Debemos asignarlo a un elemento del DOM para que lo muestre
    * * Para determinar la posición de la cámara debemos utilizar las opciones de POV Heading y pitch
    * * También debemos pasarle una ubicación, un centro, para ello ver el método 
    * * de la clase Maps getCenter()
    */
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */

         /*
         * * busquemos información sobre los métodos setPosition()
         * * y setStreetView()
         * * qué parámetros hay que pasar, cómo los debemos usar.
         */
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
