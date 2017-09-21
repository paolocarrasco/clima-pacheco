
const mostrarCiudades = ciudades => {
  const url = 'http://api.openweathermap.org/data/2.5/forecast/city';
  const keys = 'eb412ece183748e0700ba1711bf25710';

  const listadoCiudades = [];
  ciudades.forEach(ciudad => {
    fetch(`${url}?id=${ciudad.id}&APPID=${keys};units=metric`, {
      headers: { Accept: 'application/json'}
    }).then(resultado => {
        resultado.json().then(contenido => {
            // destructuring de objetos
            console.log("mostrar contenido"+contenido);
        });
    });
    const htmlCiudad = `<h4>${ciudad.nombre}</h4>
          <p data-id="${ciudad.id}"><span>20.5</span>°<img src="http://openweathermap.org/img/w/01n.png" alt=""></p>
          <p>${ciudad.descripcion}</p>`;
    listadoCiudades.push(htmlCiudad);
  });
  const contenedorCiudades = document.querySelector('.row.marketing');
  contenedorCiudades.innerHTML = listadoCiudades.join('');
};
export default mostrarCiudades;
