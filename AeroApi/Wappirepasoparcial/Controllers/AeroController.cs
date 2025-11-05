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
    }
}
