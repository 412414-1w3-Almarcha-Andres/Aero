let vuelos = []; // Guarda los datos reales obtenidos del backend

function recuperarVuelos() {
    const $ul = document.getElementById('lista_criptomonedas') // Obtiene el elemento <ul> donde se mostrarán los usuarios

    const prom = fetch('https://localhost:7246/api/Aero/Vuelos') //con la webapi local corriendo en c# hago el fetch a esa url en este caso el localhost es 7080
    const rpta= prom.then((response) => {                                       //ese localhost lo obtengo luego de correr el swagger y ver en que puerto esta corriendo
    
        //obtuve 200 ok del pedido http
        return response.json() // Convierte la respuesta en formato JSON
    })
    rpta.then((data) => {
         vuelos = data;// guarda los datos reales 

        console.log(data) //en este caso obtengo la respuesta en consola de lo que trae el boton consultar 
        //obtuve los datos del body del http response
        $ul.innerHTML = '' // Limpia el contenido previo del <ul>
        data .forEach(element => {
            const $li = document.createElement('li') // Crea un nuevo elemento <li>
             $li.classList.add('item-cripto');
            $li.innerHTML = `
  <span class="iD_VUELO">#ID Vuelo :${element.iD_VUELO}</span>
  <span class="codigO_VUELO">Cod.Vuelo :${element.codigO_VUELO} </span>
  <span class="iD_AEROPUERTO_ORIGEN">id Aeropuerto Origen :${element.iD_AEROPUERTO_ORIGEN}</span>
   <span class="iD_AEROPUERTO_DESTINO">id Aeropuerto Destino :${element.iD_AEROPUERTO_DESTINO}</span>
   <span class="fechA_LLEGADA">Fecha de Llegada${element.fechA_LLEGADA}</span>
    <span class="fechA_SALIDA">Fecha de SAlida${element.fechA_SALIDA}</span>
   <span class="iD_AVION">ID AVION :${element.iD_AVION}</span>
  
    <span class="preciO_BASE_VUELO">Precio Base : $${element.preciO_BASE_VUELO}</span>
 `;




            $ul.appendChild($li) // Agrega el <li> al <ul>
});
    }).catch((error) => {
        console.error('Error de comunicacion HTTP') // Maneja cualquier error que ocurra durante la solicitud
    }).finally(() => {
        console.log('Bloque ejecutado independientemente del resultado  de la promesa   ') // Indica que el proceso ha finalizado
    })
}


function aplicarFiltros() {
    const valorMinimo = parseFloat(document.getElementById('filtroValor').value) || 0;

    const vuelosFiltrados = vuelos.filter(v => v.preciO_BASE_VUELO >= valorMinimo);

    const $ul = document.getElementById('lista_criptomonedas');
    $ul.innerHTML = '';

    vuelosFiltrados.forEach(element => {
        const $li = document.createElement('li');
        $li.classList.add('item-cripto');
        $li.innerHTML = `
            <span class="iD_VUELO">#ID Vuelo :${element.iD_VUELO}</span>
            <span class="codigO_VUELO">Cod.Vuelo :${element.codigO_VUELO}</span>
            <span class="iD_AEROPUERTO_ORIGEN">id Aeropuerto Origen :${element.iD_AEROPUERTO_ORIGEN}</span>
            <span class="iD_AEROPUERTO_DESTINO">id Aeropuerto Destino :${element.iD_AEROPUERTO_DESTINO}</span>
            <span class="fechA_LLEGADA">Fecha de Llegada :${element.fechA_LLEGADA}</span>
            <span class="fechA_SALIDA">Fecha de Salida :${element.fechA_SALIDA}</span>
            <span class="iD_AVION">ID AVION :${element.iD_AVION}</span>
            <span class="preciO_BASE_VUELO">Precio Base : $${element.preciO_BASE_VUELO}</span>
        `;
        $ul.appendChild($li);
    });
}

//emplemo

/*
 0
: 
codigO_VUELO
: 
"AR1001"
detallE_VUELOS
: 
[]
fechA_LLEGADA
: 
"2010-03-15T11:00:00"
fechA_SALIDA
: 
"2010-03-15T08:00:00"
iD_AEROPUERTO_DESTINO
: 
12
iD_AEROPUERTO_ORIGEN
: 
5
iD_AEROPUERTO_ORIGENNavigation
: 
null
iD_AVION
: 
27
iD_AVIONNavigation
: 
null
iD_VUELO
: 
4
preciO_BASE_VUELO
: 
45000
promocioneS_VUELOS
: 
[]
[[Prototype]]
: 
Object
1
: 
{iD_VUELO: 5, codigO_VUELO: 'AR1002', iD_AEROPUERTO_ORIGEN: 2, iD_AEROPUERTO_DESTINO: 20, fechA_SALIDA: '2011-07-22T14:30:00', …}
2
: 
{iD_VUELO: 6, codigO_VUELO: 'AR1003', iD_AEROPUERTO_ORIGEN: 3, iD_AEROPUERTO_DESTINO: 7, fechA_SALIDA: '2012-11-05T06:45:00', …}





//para comentar en grupo se usa  .JS =  //       /* */
//                               .HTML= <!--   -->

//faltaria ver el tema de la autenticacion que pretende verificar el usuario y validar que ese usuario tenga permisos para ver la lista de usuarios
//y validar que tenga la autorizacion para ver la lista de usuarios

//nosotros usamos JWT (json web token) para manejar la autenticacion y autorizacion
//ese token se envia en el header de la peticion http
// 🧪 Datos simulados (mock)

