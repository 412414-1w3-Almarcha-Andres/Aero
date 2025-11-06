
//****CONSULTA 1 INICIO  */
 //****CONSULTA 1 FIN  */

  //****CONSULTA 2 INICIO  */
let vuelos = [];

function recuperarVuelos() {
  //URL DEL SWAGGER PARA ACCEDER AL JSON 
  fetch('https://localhost:7246/api/Aero/Vuelos')
    .then(response => {
      if (!response.ok) throw new Error("Error HTTP: " + response.status);
      return response.json();
    })
    .then(data => {
      console.log(data)//luegoquitar
      console.table(data)
      console.log(JSON.stringify(data[0], null, 2));
      //GUARDAMOS LO QUE TRAEMOS DE LA URL EN UN ARREGLO VUELOS PARA TRABAJAR DE FORMA LOCAL
      vuelos = data;
      renderTabla2(vuelos);
    })
    .catch(error => {
      console.error("Error al recuperar vuelos:", error);
    });
}
function aplicarFiltros2() {
  const valorMinimo = parseFloat(document.getElementById('filtroValor').value) || 0;
  const origenId = parseInt(document.getElementById('filtroRrigen').value) || 0;

  const vuelosFiltrados = vuelos.filter(v =>
    v.preciO_BASE_VUELO >= valorMinimo &&
    (origenId === 0 || v.iD_AEROPUERTO_ORIGEN === origenId)
  );

  renderTabla2(vuelosFiltrados);
}

function renderTabla2(datos) {
  const tbody = document.querySelector("#tabla-vuelos tbody");
  tbody.innerHTML = "";

  datos.forEach(v => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${v.iD_VUELO}</td>
      <td>${v.codigO_VUELO}</td>
      <td>${v.iD_AEROPUERTO_ORIGEN}</td>
      <td>${v.iD_AEROPUERTO_DESTINO}</td>
      <td>${formatearFecha(v.fechA_SALIDA)}</td>
      <td>${formatearFecha(v.fechA_LLEGADA)}</td>
      <td>${v.iD_AVION}</td>
      <td>$ ${v.preciO_BASE_VUELO.toFixed(2)}</td>
    `;
    tbody.appendChild(fila);
  });
}
 //****CONSULTA 2 FIN  */

 //****CONSULTA 3 INICIO  */
let pasajeros = [];

function recuperarPasajeros() {
  //URL DEL SWAGGER PARA ACCEDER AL JSON 
  fetch('https://localhost:7246/api/Aero/recuperables')
    .then(response => {
      if (!response.ok) throw new Error("Error HTTP: " + response.status);
      return response.json();
    })
    .then(data => {
      console.log(data)//luegoquitar
      console.table(data)
      console.log(JSON.stringify(data[0], null, 2));
      //GUARDAMOS LO QUE TRAEMOS DE LA URL EN UN ARREGLO pasajeros PARA TRABAJAR DE FORMA LOCAL
      pasajeros = data;
      renderTabla3(pasajeros);
    })
    .catch(error => {
      console.error("Error al recuperar pasajeros:", error);
    });
}
function aplicarFiltros3() {
  const mes = document.getElementById('filtroMes').value || null;//dom
  const cantCompras = parseInt(document.getElementById('filtrototal_compras_mes').value) || 0;

  const pasajerosFiltrados = pasajeros.filter(p =>
    p.mes_que_más_viaja === mes &&
    (cantCompras === 0 || p.total_compras_mes === cantCompras)
  );

  renderTabla3(pasajerosFiltrados);
}
function renderTabla3(datos) {
  const tbody = document.querySelector("#tabla-pasajeros tbody");
  tbody.innerHTML = "";

  datos.forEach(v => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${v.iD_PASAJERO}</td>
      <td>${v.mes_que_más_viaja}</td>
      <td>${v.total_compras_mes}</td>
      <td>${v.nombre}</td>
      <td>${v.apellido}</td>
      <td>${v.email}</td>
      <td>${v.telefono}</td>
      
    `;
    tbody.appendChild(fila);
  });
}


 
 //****CONSULTA 3 FIN  */
 
//****CONSULTA 5 Rutas_Rentables INICIO  */

let Rutas_Rentables = [];

function recuperarRutas_Rentables() {
  //URL DEL SWAGGER PARA ACCEDER AL JSON 
  fetch('https://localhost:7246/api/Aero/rutasRentables')
    .then(response => {
      if (!response.ok) throw new Error("Error HTTP: " + response.status);
      return response.json();
    })
    .then(data => {
      console.log(data)//luegoquitar
      console.table(data)
      console.log(JSON.stringify(data[0], null, 2));
      //GUARDAMOS LO QUE TRAEMOS DE LA URL EN UN ARREGLO pasajeros PARA TRABAJAR DE FORMA LOCAL
      Rutas_Rentables = data;
      renderTabla5(Rutas_Rentables);
    })
    .catch(error => {
      console.error("Error al recuperar Rutas_Rentables:", error);
    });
}
function aplicarFiltros5() {
  const mes = parseInt(document.getElementById('filtroMesc5').value);
  const mesf = parseInt(document.getElementById('filtroMesf5').value);

  if (isNaN(mes) || isNaN(mesf) || mes < 1 || mes > 12 || mesf < 1 || mesf > 12 || mes > mesf) {
    alert("Rango de meses inválido. Debe estar entre 1 y 12, y el mes inicial no puede ser mayor al final.");
    return;
  }

  const Rutas_RentablesFiltrados = Rutas_Rentables.filter(r =>
    r.mes >= mes && r.mes <= mesf
  );

  renderTabla5(Rutas_RentablesFiltrados);
}

function renderTabla5(datos) {
  const tbody = document.querySelector("#tabla-Rutas_Rentables tbody");
  tbody.innerHTML = "";

  datos.forEach(v => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${v.origen}</td>
      <td>${v.destino}</td>
      <td>${v.anio}</td>
      <td>${v.mes}</td>
      <td>$${v.margen_total}</td>
      
 

      
    `;
    tbody.appendChild(fila);
  });
}
//****CONSULTA 5 Rutas_Rentables FIN  */




//*****FUNCIONES PARA TODAS LAS CONSULTAS */


function formatearFecha(fechaISO) {
  return new Date(fechaISO).toLocaleString();
}
//PARA CORRER LA CONSULTA AL CARGAR EL DOM 
document.addEventListener("DOMContentLoaded", recuperarVuelos);//consulta2
document.addEventListener("DOMContentLoaded", recuperarPasajeros);//consulta3
document.addEventListener("DOMContentLoaded", recuperarRutas_Rentables);//consulta5




