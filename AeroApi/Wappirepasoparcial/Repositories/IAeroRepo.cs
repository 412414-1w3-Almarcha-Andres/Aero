using Wappirepasoparcial.Dtos;
using Wappirepasoparcial.Models;

namespace Wappirepasoparcial.Repositories
{
    public interface IAeroRepo
    {
       
        Task<List<VUELOS>> GetAllVuelos();
        Task<List<vw_recuperar_pasajero>> GetPasajerosRecuperables();

        //Task<VueloDto?> GetVuelosById(int id);
    }
}
