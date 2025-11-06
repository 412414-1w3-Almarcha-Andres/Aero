using Microsoft.AspNetCore.Mvc;
using Wappirepasoparcial.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Wappirepasoparcial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AeroController : ControllerBase
    {
        private readonly IService _service;
        public AeroController(IService service)
        {
            _service = service;
        }

        //Lista de todos los Vuelos
        [HttpGet("Vuelos")]
        public async Task<IActionResult> GetAllVuelos()
        {
            var listavuelos = await _service.GetAllVuelos();
            try
            {
                if (listavuelos != null)
                {
                    return Ok(listavuelos);
                }
                return BadRequest("No hay vuelos en la lista");
            }
            catch
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno del servidor" });
            }
        }

        //Recuperar VISTA CLIENTES

        [HttpGet("recuperables")]
        public async Task<IActionResult> GetPasajerosRecuperables()
        {
            var pasajeros = await _service.GetPasajerosRecuperables();
            return Ok(pasajeros);
        }


        [HttpGet("rentables")]
        public async Task<IActionResult> GetPasajerosRentables()
        {
            var pasajeros = await _service.clientes_may_gasto();
            return Ok(pasajeros);
        }
        [HttpGet("rutasRentables")]
        public async Task<IActionResult> GetRutasRentables()
        {
            var rutas = await _service.rutas_rentables();
            return Ok(rutas);
        }
        [HttpGet("rutasImproductivas")]
        public async Task<IActionResult> GetRutasImproductivas()
        {
            var pasajeros = await _service.destinos_improductivos();
            return Ok(pasajeros);
        }

        [HttpGet("precioDinamico")]
        public async Task<IActionResult> GetprecioDinamico()
        {
            var precioVueloDinamico = await _service.precio_ocupacion();
            return Ok(precioVueloDinamico);
        }
        //Recuperar Vuelo por Id
        //[HttpGet("Vuelo/{id}")]
        //public async Task<IActionResult> GetVuelosById(int id)
        //{
        //    var vuelo = await _service.GetVuelosById(id);
        //    try
        //    {
        //        if (vuelo != null)
        //        {
        //            return Ok(vuelo);
        //        }
        //        return BadRequest($"No hay vuelos con el id : = {id}");
        //    }
        //    catch
        //    {

        //        return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = "Error interno del servidor" });
        // }


        // }

    }
}
