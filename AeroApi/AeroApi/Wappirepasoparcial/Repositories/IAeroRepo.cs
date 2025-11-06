using Wappirepasoparcial.Dtos;
using Wappirepasoparcial.Models;

namespace Wappirepasoparcial.Repositories
{
    public interface IAeroRepo
    {
       
        Task<List<VUELOS>> GetAllVuelos();
        Task<List<vw_recuperar_pasajeros>> GetPasajerosRecuperables();

        Task<List<Gasto_Promedio_Cliente>> clientes_may_gasto(); 
        Task<List<Rutas_Rentables>> rutas_rentables(); 
        Task<List<vw_DestinosImproductivos>> destinos_improductivos();
        Task<List<vw_precio_ocupacion>> precio_ocupacion();

        //Task<VueloDto?> GetVuelosById(int id);
    }
}
