using Microsoft.EntityFrameworkCore;
using Wappirepasoparcial.Models;

namespace Wappirepasoparcial.Repositories
{
    public class AeroRepo : IAeroRepo
    {
        private readonly AEROLINEASContext _context;
        public AeroRepo(AEROLINEASContext context)
        {
            _context = context;
        }

        public async Task<List<Gasto_Promedio_Cliente>> clientes_may_gasto()
        {
            return await _context.Gasto_Promedio_Cliente.ToListAsync();

        }

        public async Task<List<vw_DestinosImproductivos>> destinos_improductivos()
        {
            return await _context.vw_DestinosImproductivos.ToListAsync();

        }

        public async Task<List<VUELOS>> GetAllVuelos()
        {
            var listavuelos = await _context.VUELOS.ToListAsync();
            return listavuelos;
        }
        public async Task<List<vw_recuperar_pasajeros>> GetPasajerosRecuperables()
        {
            return await _context.vw_recuperar_pasajeros.ToListAsync();
        }

        public async Task<List<vw_precio_ocupacion>> precio_ocupacion()
        {
            return await _context.vw_precio_ocupacion.ToListAsync();

        }

        public async Task<List<Rutas_Rentables>> rutas_rentables()
        {
            return await _context.Rutas_Rentables.ToListAsync();

        }
    }
}
