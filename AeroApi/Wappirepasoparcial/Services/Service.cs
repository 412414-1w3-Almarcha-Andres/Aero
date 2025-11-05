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

        public  async Task<List<VUELOS>> GetAllVuelos()
        {
            var listavuelos = await _aeroRepo.GetAllVuelos();
            return listavuelos;
        }
    }
}
