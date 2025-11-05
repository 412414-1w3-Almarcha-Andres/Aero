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

        public async Task<List<VUELOS>> GetAllVuelos()
        {
            var listavuelos = await _context.VUELOS.ToListAsync();
            return listavuelos;
        }
    }
}
