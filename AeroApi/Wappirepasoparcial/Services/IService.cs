
using Wappirepasoparcial.Dtos;
using Wappirepasoparcial.Models;

namespace Wappirepasoparcial.Services
{
    public interface IService
    {
        
        Task<List<VUELOS>> GetAllVuelos();
        Task<List<vw_recuperar_pasajero>> GetPasajerosRecuperables();

        // Task<VueloDto?> GetVuelosById(int id);
    }
}
