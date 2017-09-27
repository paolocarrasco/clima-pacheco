import mostrarCiudades from './app';

$.fn.pacheco = function(opciones){
  const {ciudades} = opciones;

  mostrarCiudades(ciudades, $(this));

  $(this).on('click', '.ciudad', function(){
    const id = $(this).find('p').data('id');
    const modal = $('.modal');

    // const ciudad = ciudades.filter(ciudad => ciudad.id == id)[0];
    const [ciudad] = ciudades.filter(ciudad => ciudad.id == id);

    modal.removeClass('inactivo');
    // const nombre = ciudad.nombre;
    // const descripcion = ciudad.descripcion;
    const {nombre, descripcion} = ciudad;
    modal.find('h4').text(nombre);
    modal.find('p').text(descripcion);
  });
};
