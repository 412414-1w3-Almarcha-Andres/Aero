
using Wappirepasoparcial.Models;

namespace Wappirepasoparcial.Services
{
    public interface IService
    {
        
        Task<List<VUELOS>> GetAllVuelos();
    }
}
