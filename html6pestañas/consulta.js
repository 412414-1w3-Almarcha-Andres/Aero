
//****CONSULTA 1 INICIO  */

// ruta improductiva ENDPOINT /rutas improductivas

let pasajeros = []; // Inicializamos correctamente

// Función para cargar los datos automáticamente al abrir la página
function rutaImrpoductiva() {
  fetch('https://localhost:7246/api/Aero/rutasImproductivas')
    .then(response => {
      if (!response.ok) throw new Error("Error HTTP: " + response.status);
      return response.json();
    })
    .then(data => {
      pasajeros = data;           // Guardamos los datos
      renderTabla3(pasajeros);   // Mostramos en la tabla
    })
    .catch(error => {
      console.error("Error al recuperar pasajeros:", error);
    });
}

// Filtro por nombre de destino
function aplicarFiltros3() {
  const filtro = document.getElementById('filtroNombreDestino').value.toLowerCase();

  const pasajerosFiltrados = pasajeros.filter(p =>
    p.nombre_destino.toLowerCase().includes(filtro)
  );

  renderTabla3(pasajerosFiltrados);
}

// Renderizado de la tabla
function renderTabla3(datos) {
  const tbody = document.querySelector("#tabla-pasajeros tbody");
  tbody.innerHTML = "";

  datos.forEach(v => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${v.id_destino || ""}</td>
      <td>${v.nombre_destino || ""}</td>
      <td>${v.promedio_ocupacion || ""}</td>
    `;
    tbody.appendChild(fila);
  });
}

// Llamada automática al cargar la página
window.addEventListener('DOMContentLoaded', rutaImrpoductiva);


// PASAJERO RENTABLE ENDPOINT /RENTABLE fin

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


 
 //****CONSULTA 3 INICIO  */// Variable global para almacenar los datos

//******************** CONSULTA - PASAJEROS ********************
let pasajerosRecu = []; // Variable global para almacenar los pasajeros

// Función para traer los datos del endpoint
function recuperarPasajeros() {
  console.log("Iniciando fetch de pasajeros...");

  fetch('https://localhost:7246/api/Aero/recuperables')
    .then(response => {
      if (!response.ok) throw new Error("Error HTTP: " + response.status);
      return response.json();
    })
    .then(data => {
      pasajerosRecu = data;             // Guardamos los datos
      console.log("Datos recuperados del endpoint:", pasajerosRecu);

      if (pasajerosRecu.length === 0) {
        console.warn("El array de pasajeros está vacío.");
      }

      renderTablaPasajeros(pasajerosRecu); // Renderizamos la tabla
    })
    .catch(error => {
      console.error("Error al recuperar pasajeros:", error);
    });
}

// Función para renderizar la tabla de pasajeros
function renderTablaPasajeros(datos) {
  const tbody = document.querySelector("#tabla-pasajeross tbody");

  if (!tbody) {
    console.error("No se encontró tbody en #tabla-pasajeros");
    return;
  }

  tbody.innerHTML = ""; // Limpiamos la tabla

  if (datos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center">No hay pasajeros para mostrar</td></tr>`;
    return;
  }

  datos.forEach((pasajero, index) => {
    console.log(`Renderizando pasajero ${index + 1}:`, pasajero);

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${pasajero.iD_PASAJERO}</td>
      <td>${pasajero.mes_que_más_viaja}</td>
      <td>${pasajero.total_compras_mes}</td>
      <td>${pasajero.nombre}</td>
      <td>${pasajero.apellido}</td>
      <td>${pasajero.email}</td>
      <td>${pasajero.telefono}</td>
    `;
    tbody.appendChild(fila);
  });
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOM cargado, iniciando recuperación de pasajeros...");
  recuperarPasajeros();
});


 
 //****CONSULTA 3 FIN  */

//*****FUNCIONES PARA TODAS LAS CONSULTAS */


function formatearFecha(fechaISO) {
  return new Date(fechaISO).toLocaleString();
}
//PARA CORRER LA CONSULTA AL CARGAR EL DOM 
document.addEventListener("DOMContentLoaded", recuperarVuelos);//consulta2
document.addEventListener("DOMContentLoaded", recuperarPasajeros);//consulta3



// CONSULTA 4 INICIO
//******************** PASAJEROS RENTABLES ********************
let pasajerosRentables = []; // Variable global

// Función para traer los datos del endpoint
function recuperarPasajerosRentables() {
  console.log("Recuperando pasajeros rentables...");
  fetch('https://localhost:7246/api/Aero/rentables') // Cambiá la URL según tu API
    .then(response => {
      if (!response.ok) throw new Error("Error HTTP: " + response.status);
      return response.json();
    })
    .then(data => {
      pasajerosRentables = data;
      console.log("Datos pasajeros rentables:", pasajerosRentables);
      renderTablaPasajerosRentables(pasajerosRentables);
    })
    .catch(error => {
      console.error("Error al recuperar pasajeros rentables:", error);
    });
}

// Función para renderizar la tabla
function renderTablaPasajerosRentables(datos) {
  const tbody = document.querySelector("#tabla-pasajeros-rentables tbody");
  if (!tbody) {
    console.error("No se encontró tbody de la tabla de pasajeros rentables");
    return;
  }

  tbody.innerHTML = ""; // Limpiamos la tabla

  if (datos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center">No hay pasajeros para mostrar</td></tr>`;
    return;
  }

  datos.forEach(pasajero => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${pasajero.iD_PASAJERO}</td>
      <td>${pasajero.nombre}</td>
      <td>${pasajero.apellido}</td>
      <td>$ ${pasajero.gasto_promedio.toFixed(2)}</td>
    `;
    tbody.appendChild(fila);
  });
}

// Función para filtrar por nombre
function aplicarFiltroPasajerosRentables() {
  const filtro = document.getElementById('filtroNombrePasajeroRentable').value.toLowerCase();
  const filtrados = pasajerosRentables.filter(p => p.nombre.toLowerCase().includes(filtro));
  renderTablaPasajerosRentables(filtrados);
}

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
  recuperarPasajerosRentables();

  const inputFiltro = document.getElementById('filtroNombrePasajeroRentable');
  inputFiltro.addEventListener('input', aplicarFiltroPasajerosRentables);
});

// CONSULTA 4 FIN


// CONSULTA 5 INIICIO
//******************** RUTAS RENTABLES ********************
let rutasRentables = []; // Variable global

// Función para traer los datos del endpoint
function recuperarRutasRentables() {
  console.log("Recuperando rutas rentables...");
  fetch('https://localhost:7246/api/Aero/rutasRentables')
    .then(response => {
      if (!response.ok) throw new Error("Error HTTP: " + response.status);
      return response.json();
    })
    .then(data => {
      rutasRentables = data;
      console.log("Datos rutas rentables:", rutasRentables);
      renderTablaRutasRentables(rutasRentables);
    })
    .catch(error => {
      console.error("Error al recuperar rutas rentables:", error);
    });
}

// Función para renderizar la tabla
function renderTablaRutasRentables(datos) {
  const tbody = document.querySelector("#tabla-rutas-rentables tbody");
  if (!tbody) {
    console.error("No se encontró tbody de la tabla de rutas rentables");
    return;
  }

  tbody.innerHTML = "";

  if (datos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center">No hay rutas para mostrar</td></tr>`;
    return;
  }

  datos.forEach(ruta => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${ruta.origen}</td>
      <td>${ruta.destino}</td>
      <td>${ruta.anio}</td>
      <td>${ruta.mes}</td>
      <td>$ ${ruta.margen_total.toLocaleString()}</td>
    `;
    tbody.appendChild(fila);
  });
}

// Función para filtrar rutas
function aplicarFiltroRutasRentables() {
  const origen = document.getElementById('filtroOrigen').value.toLowerCase();
  const destino = document.getElementById('filtroDestino').value.toLowerCase();

  const filtrados = rutasRentables.filter(r =>
    r.origen.toLowerCase().includes(origen) &&
    r.destino.toLowerCase().includes(destino)
  );

  renderTablaRutasRentables(filtrados);
}

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
  recuperarRutasRentables();

  const inputOrigen = document.getElementById('filtroOrigen');
  const inputDestino = document.getElementById('filtroDestino');

  inputOrigen.addEventListener('input', aplicarFiltroRutasRentables);
  inputDestino.addEventListener('input', aplicarFiltroRutasRentables);
});

// CONSULTA 5 FIN

// CONSULTA 6 INIICIO
//******************** VUELOS PRECIO DINÁMICO ********************
let vuelosPrecioDinamico = []; // Variable global

// Función para traer los datos del endpoint
function recuperarPrecioDinamico() {
  console.log("Recuperando vuelos precio dinámico...");
  fetch('https://localhost:7246/api/Aero/precioDinamico') // Endpoint correcto
    .then(response => {
      if (!response.ok) throw new Error("Error HTTP: " + response.status);
      return response.json();
    })
    .then(data => {
      vuelosPrecioDinamico = data;
      console.log("Datos vuelos precio dinámico:", vuelosPrecioDinamico);
      renderTablaPrecioDinamico(vuelosPrecioDinamico);
    })
    .catch(error => {
      console.error("Error al recuperar vuelos precio dinámico:", error);
    });
}

// Función para renderizar la tabla
function renderTablaPrecioDinamico(datos) {
  const tbody = document.querySelector("#tabla-precio-dinamico tbody");
  if (!tbody) {
    console.error("No se encontró tbody de la tabla de precio dinámico");
    return;
  }

  tbody.innerHTML = "";

  if (datos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center">No hay vuelos para mostrar</td></tr>`;
    return;
  }

  datos.forEach(vuelo => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${vuelo.id_vuelo}</td>
      <td>${vuelo.porcentaje_ocupacion.toFixed(2)}%</td>
      <td>$ ${vuelo.preciO_BASE_VUELO.toFixed(2)}</td>
      <td>${(vuelo.incremento * 100).toFixed(0)}%</td>
      <td>$ ${vuelo.precio_final.toFixed(2)}</td>
    `;
    tbody.appendChild(fila);
  });
}

// Función para filtrar vuelos
function aplicarFiltroPrecioDinamico() {
  const idVuelo = parseInt(document.getElementById('filtroIdVuelo').value) || 0;
  const porcentajeMin = parseFloat(document.getElementById('filtroPorcentaje').value) || 0;

  const filtrados = vuelosPrecioDinamico.filter(v =>
    (idVuelo === 0 || v.id_vuelo === idVuelo) &&
    (v.porcentaje_ocupacion >= porcentajeMin)
  );

  renderTablaPrecioDinamico(filtrados);
}

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
  recuperarPrecioDinamico();

  const inputId = document.getElementById('filtroIdVuelo');
  const inputPorcentaje = document.getElementById('filtroPorcentaje');

  inputId.addEventListener('input', aplicarFiltroPrecioDinamico);
  inputPorcentaje.addEventListener('input', aplicarFiltroPrecioDinamico);
});

// CONSULTA 6 FIN
