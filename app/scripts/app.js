const mostrarCiudades = ciudades => {
  const listadoCiudades = [];
  ciudades.forEach(ciudad => {
    const htmlCiudad = `<h4>${ciudad.nombre}</h4>
          <p data-id="2147714"><span>20.5</span>°<img src="http://openweathermap.org/img/w/01n.png" alt=""></p>
          <p>${ciudad.descripcion}</p>`;
    listadoCiudades.push(htmlCiudad);
  });
  const contenedorCiudades = document.querySelector('.row.marketing');
  contenedorCiudades.innerHTML = listadoCiudades.join('');
};
export default mostrarCiudades;
