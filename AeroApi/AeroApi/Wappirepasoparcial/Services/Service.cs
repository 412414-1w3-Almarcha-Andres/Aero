using Microsoft.EntityFrameworkCore;
using Wappirepasoparcial.Models;
using Wappirepasoparcial.Repositories;

namespace Wappirepasoparcial.Services
{
    public class Service : IService
    {
        private readonly IAeroRepo _aeroRepo;
        public Service(IAeroRepo aeroRepo)
        {
            _aeroRepo = aeroRepo;
        }

        public async Task<List<Gasto_Promedio_Cliente>> clientes_may_gasto()
        {
            return await _aeroRepo.clientes_may_gasto();

        }

        public async Task<List<vw_DestinosImproductivos>> destinos_improductivos()
        {
            return await _aeroRepo.destinos_improductivos();

        }

        public async Task<List<VUELOS>> GetAllVuelos()
        {
           return await _aeroRepo.GetAllVuelos();
        }
        public async Task<List<vw_recuperar_pasajeros>> GetPasajerosRecuperables()
        {
            return await _aeroRepo.GetPasajerosRecuperables();
        }

        public async Task<List<vw_precio_ocupacion>> precio_ocupacion()
        {
            return await _aeroRepo.precio_ocupacion();

        }

        public async Task<List<Rutas_Rentables>> rutas_rentables()
        {
            return await _aeroRepo.rutas_rentables();

        }
    }
}
